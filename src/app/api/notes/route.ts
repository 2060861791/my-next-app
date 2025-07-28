import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

// 获取 note.json 的绝对路径
const NOTES_PATH = path.join(process.cwd(), "src/data/note.json");

// GET 请求 - 获取所有笔记
export async function GET() {
  try {
    // 读取 note.json 文件内容
    const fileData = await fs.readFile(NOTES_PATH, "utf-8");
    const notes = JSON.parse(fileData);
    return NextResponse.json({
      success: true,
      data: notes,
      message: "获取笔记列表成功",
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "获取笔记列表失败",
        error: error instanceof Error ? error.message : "未知错误",
      },
      { status: 500 }
    );
  }
}

// POST 请求 - 创建新笔记
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, content, tags } = body;

    // 验证必填字段
    if (!title || !content) {
      return NextResponse.json(
        {
          success: false,
          message: "标题和内容不能为空",
        },
        { status: 400 }
      );
    }

    // 读取现有笔记
    const fileData = await fs.readFile(NOTES_PATH, "utf-8");
    const notes = JSON.parse(fileData);

    // 生成新 id（最大 id + 1）
    const maxId =
      notes.length > 0 ? Math.max(...notes.map((n: any) => n.id)) : 0;
    const newNote = {
      id: maxId + 1,
      title,
      content,
      tags: tags || [],
      date: new Date().toISOString().split("T")[0], // 当前日期
    };

    // 添加到笔记列表
    notes.push(newNote);

    // 写回 note.json 文件
    await fs.writeFile(NOTES_PATH, JSON.stringify(notes, null, 2), "utf-8");

    return NextResponse.json(
      {
        success: true,
        data: newNote,
        message: "笔记创建成功",
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "创建笔记失败",
        error: error instanceof Error ? error.message : "未知错误",
      },
      { status: 500 }
    );
  }
}
