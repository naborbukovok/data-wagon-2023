from fastapi import APIRouter, WebSocket, WebSocketDisconnect

router = APIRouter(prefix='/trains')


@router.websocket('/ws')
async def trains_ws(websocket: WebSocket):
    await websocket.accept()
    try:
        while True:
            data = await websocket.receive_text()
            await websocket.send_text(f"Your message is {data}")
    except WebSocketDisconnect:
        print('Hello')
