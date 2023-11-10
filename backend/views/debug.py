from fastapi import APIRouter


router = APIRouter(prefix="/debug")


@router.get("/")
def debug():
    return "ok"
