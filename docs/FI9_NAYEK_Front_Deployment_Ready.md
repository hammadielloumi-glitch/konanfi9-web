FI9_NAYEK — Front Deployment Ready

Projet: KONAN
Protocole: FI9_NAYEK
Date: 2025-11-13T12:54:07Z

1. vercel.json généré:
/workspace/konanfi9-web/vercel.json

Contenu:
{
  "version": 2,
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "ignoreCommand": "git diff --quiet HEAD^ HEAD ."
}


2. Usage de NEXT_PUBLIC_API_BASE_URL:
Occurrences de NEXT_PUBLIC_API_BASE_URL:
/workspace/konanfi9-web/.env.example:3:NEXT_PUBLIC_API_BASE_URL=
/workspace/konanfi9-web/.env.local:2:# NEXT_PUBLIC_API_BASE_URL=http://localhost:3001
/workspace/konanfi9-web/README.md:40:NEXT_PUBLIC_API_BASE_URL=http://localhost:3001
/workspace/konanfi9-web/README.md:48:- Base URL: `process.env.NEXT_PUBLIC_API_BASE_URL`
/workspace/konanfi9-web/src/app/health/page.tsx:19:  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || '';
/workspace/konanfi9-web/src/app/tester/page.tsx:16:  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || '';
/workspace/konanfi9-web/src/lib/api.ts:3: * - Base URL: process.env.NEXT_PUBLIC_API_BASE_URL
/workspace/konanfi9-web/src/lib/api.ts:42:  const baseUrl = options.baseUrl ?? process.env.NEXT_PUBLIC_API_BASE_URL ?? '';

Occurrences de process.env.NEXT_PUBLIC_API_BASE_URL:
/workspace/konanfi9-web/README.md:48:- Base URL: `process.env.NEXT_PUBLIC_API_BASE_URL`
/workspace/konanfi9-web/docs/front_audit_tmp/env_usage.txt:4:/workspace/konanfi9-web/README.md:48:- Base URL: `process.env.NEXT_PUBLIC_API_BASE_URL`
/workspace/konanfi9-web/docs/front_audit_tmp/env_usage.txt:5:/workspace/konanfi9-web/src/app/health/page.tsx:19:  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || '';
/workspace/konanfi9-web/docs/front_audit_tmp/env_usage.txt:6:/workspace/konanfi9-web/src/app/tester/page.tsx:16:  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || '';
/workspace/konanfi9-web/docs/front_audit_tmp/env_usage.txt:7:/workspace/konanfi9-web/src/lib/api.ts:3: * - Base URL: process.env.NEXT_PUBLIC_API_BASE_URL
/workspace/konanfi9-web/docs/front_audit_tmp/env_usage.txt:8:/workspace/konanfi9-web/src/lib/api.ts:42:  const baseUrl = options.baseUrl ?? process.env.NEXT_PUBLIC_API_BASE_URL ?? '';
/workspace/konanfi9-web/src/app/health/page.tsx:19:  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || '';
/workspace/konanfi9-web/src/app/tester/page.tsx:16:  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || '';
/workspace/konanfi9-web/src/lib/api.ts:3: * - Base URL: process.env.NEXT_PUBLIC_API_BASE_URL
/workspace/konanfi9-web/src/lib/api.ts:42:  const baseUrl = options.baseUrl ?? process.env.NEXT_PUBLIC_API_BASE_URL ?? '';

3. Vérification des chemins absolus non supportés:
Occurrences de /workspace:
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:1:/workspace/tmp/backend_konanFI9/app/api/auth.py:4:from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:2:/workspace/tmp/backend_konanFI9/app/api/auth.py:11:from app.core.security import hash_password, verify_password, create_access_token, decode_token
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:3:/workspace/tmp/backend_konanFI9/app/api/auth.py:15:bearer = HTTPBearer(auto_error=False)
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:4:/workspace/tmp/backend_konanFI9/app/api/auth.py:23:    password: str
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:5:/workspace/tmp/backend_konanFI9/app/api/auth.py:29:    password: str
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:6:/workspace/tmp/backend_konanFI9/app/api/auth.py:43:        hashed_password=hash_password(p.password),
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:7:/workspace/tmp/backend_konanFI9/app/api/auth.py:48:    db.refresh(u)
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:8:/workspace/tmp/backend_konanFI9/app/api/auth.py:60:    if not u or not verify_password(p.password, u.hashed_password):
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:9:/workspace/tmp/backend_konanFI9/app/api/auth.py:63:    token = create_access_token(subject=str(u.id))
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:10:/workspace/tmp/backend_konanFI9/app/api/auth.py:65:        "access_token": token,
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:11:/workspace/tmp/backend_konanFI9/app/api/auth.py:66:        "token_type": "bearer",
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:12:/workspace/tmp/backend_konanFI9/app/api/auth.py:74:def _user_from_token(creds: HTTPAuthorizationCredentials | None, db: Session) -> User:
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:13:/workspace/tmp/backend_konanFI9/app/api/auth.py:78:    data = decode_token(creds.credentials)
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:14:/workspace/tmp/backend_konanFI9/app/api/auth.py:95:    return _user_from_token(creds, db)
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:15:/workspace/tmp/backend_konanFI9/app/api/auth.py:104:    return _user_from_token(creds, db)
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:16:/workspace/tmp/backend_konanFI9/app/api/auth_seed.py:6:from app.core.security import hash_password
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:17:/workspace/tmp/backend_konanFI9/app/api/auth_seed.py:19:    password = "KING"
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:18:/workspace/tmp/backend_konanFI9/app/api/auth_seed.py:31:        hashed_password=hash_password(password),
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:19:/workspace/tmp/backend_konanFI9/app/api/auth_seed.py:38:    db.refresh(new_user)
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:20:/workspace/tmp/backend_konanFI9/app/api/files.py:37:        db.refresh(new_file)
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:21:/workspace/tmp/backend_konanFI9/app/api/lawsold.py:41:SMTP_PASS = os.getenv("SMTP_PASS", "password-placeholder")
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:22:/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:70:    db.refresh(conv)
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:23:/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:92:    db.refresh(conv)
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:24:/workspace/tmp/backend_konanFI9/app/api.py:7:from .core.security import hash_password, verify_password, create_access_token
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:25:/workspace/tmp/backend_konanFI9/app/api.py:23:    user = User(email=data.email, hashed_password=hash_password(data.password))
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:26:/workspace/tmp/backend_konanFI9/app/api.py:26:    db.refresh(user)
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:27:/workspace/tmp/backend_konanFI9/app/api.py:33:    if not user or not verify_password(data.password, user.hashed_password):
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:28:/workspace/tmp/backend_konanFI9/app/api.py:34:        raise HTTPException(status_code=400, detail="Incorrect email or password")
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:29:/workspace/tmp/backend_konanFI9/app/api.py:35:    token = create_access_token({"sub": user.email})
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:30:/workspace/tmp/backend_konanFI9/app/api.py:36:    return {"access_token": token, "token_type": "bearer"}
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:31:/workspace/tmp/backend_konanFI9/app/config.py:14:    JWT_SECRET: str
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:32:/workspace/tmp/backend_konanFI9/app/config.py:15:    JWT_ALGORITHM: str = "HS256"
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:33:/workspace/tmp/backend_konanFI9/app/core/config.py:13:    JWT_SECRET: str = os.getenv("JWT_SECRET", "default_jwt_secret")
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:34:/workspace/tmp/backend_konanFI9/app/core/config.py:14:    JWT_ALGORITHM: str = "HS256"
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:35:/workspace/tmp/backend_konanFI9/app/core/security.py:6:from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:36:/workspace/tmp/backend_konanFI9/app/core/security.py:7:from jose import JWTError, jwt
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:37:/workspace/tmp/backend_konanFI9/app/core/security.py:11:bearer_scheme = HTTPBearer(auto_error=True)
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:38:/workspace/tmp/backend_konanFI9/app/core/security.py:13:SECRET_KEY = os.getenv("JWT_SECRET", "change-me")
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:39:/workspace/tmp/backend_konanFI9/app/core/security.py:14:ALGORITHM = os.getenv("JWT_ALGORITHM", "HS256")
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:40:/workspace/tmp/backend_konanFI9/app/core/security.py:15:ACCESS_TOKEN_EXPIRE_MINUTES = int(os.getenv("JWT_ACCESS_TOKEN_EXPIRE_MINUTES", "1440"))
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:41:/workspace/tmp/backend_konanFI9/app/core/security.py:18:def hash_password(password: str) -> str:
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:42:/workspace/tmp/backend_konanFI9/app/core/security.py:19:    return pwd_context.hash(password)
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:43:/workspace/tmp/backend_konanFI9/app/core/security.py:22:def verify_password(plain_password: str, hashed_password: str) -> bool:
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:44:/workspace/tmp/backend_konanFI9/app/core/security.py:24:        return pwd_context.verify(plain_password, hashed_password)
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:45:/workspace/tmp/backend_konanFI9/app/core/security.py:29:def create_access_token(
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:46:/workspace/tmp/backend_konanFI9/app/core/security.py:48:def decode_token(token: str) -> Dict[str, Any]:
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:47:/workspace/tmp/backend_konanFI9/app/core/security.py:49:    return jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:48:/workspace/tmp/backend_konanFI9/app/core/security.py:53:    token = credentials.credentials
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:49:/workspace/tmp/backend_konanFI9/app/core/security.py:55:        data = decode_token(token)
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:50:/workspace/tmp/backend_konanFI9/app/core/security.py:58:            raise JWTError("Subject must be a string.")
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:51:/workspace/tmp/backend_konanFI9/app/core/security.py:60:    except JWTError as exc:
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:52:/workspace/tmp/backend_konanFI9/app/core/security.py:63:            detail="Invalid or expired token",
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:53:/workspace/tmp/backend_konanFI9/app/crud.py:13:    db.refresh(conv)
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:54:/workspace/tmp/backend_konanFI9/app/memory.py:9:    db.refresh(conv)
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:55:/workspace/tmp/backend_konanFI9/app/models/user.py:17:    hashed_password = Column(String(255), nullable=False)
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:56:/workspace/tmp/backend_konanFI9/app/routers/auth_router.py:12:    password = data.get("password")
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:57:/workspace/tmp/backend_konanFI9/app/routers/auth_router.py:13:    if email and password:
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:58:/workspace/tmp/backend_konanFI9/app/routers/auth_router.py:17:# /auth/me → renvoie 403 si pas de token
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:59:/workspace/tmp/backend_konanFI9/app/routers/auth_router.py:23:def get_current_user(token: str = Depends(lambda: None)):
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:60:/workspace/tmp/backend_konanFI9/app/routers/user_router.py:6:from app.core.security import hash_password, verify_password, create_access_token
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:61:/workspace/tmp/backend_konanFI9/app/routers/user_router.py:15:    hashed = hash_password(user.password)
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:62:/workspace/tmp/backend_konanFI9/app/routers/user_router.py:16:    db_user = User(email=user.email, hashed_password=hashed, full_name=user.full_name)
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:63:/workspace/tmp/backend_konanFI9/app/routers/user_router.py:19:    db.refresh(db_user)
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:64:/workspace/tmp/backend_konanFI9/app/routers/user_router.py:25:    if not user or not verify_password(data.password, user.hashed_password):
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:65:/workspace/tmp/backend_konanFI9/app/routers/user_router.py:27:    token = create_access_token({"sub": str(user.id)})
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:66:/workspace/tmp/backend_konanFI9/app/routers/user_router.py:28:    return {"access_token": token, "token_type": "bearer", "plan": user.plan.value}
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:67:/workspace/tmp/backend_konanFI9/app/schemas/user.py:10:    password: str
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:68:/workspace/tmp/backend_konanFI9/app/schemas/user.py:24:    password: str
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:69:/workspace/tmp/backend_konanFI9/app/schemas/user.py:27:    access_token: str
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:70:/workspace/tmp/backend_konanFI9/app/schemas/user.py:28:    token_type: str = "bearer"
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:71:/workspace/tmp/backend_konanFI9/app/schemas/user_schemas.py:11:    password: str
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:72:/workspace/tmp/backend_konanFI9/app/schemas/user_schemas.py:16:    password: str
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:73:/workspace/tmp/backend_konanFI9/app/services/llm_service.py:30:        "Authorization": f"Bearer {API_KEY}",
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:74:/workspace/tmp/backend_konanFI9/app/services/llm_service.py:37:        "max_tokens": MAX_TOKENS,
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:75:/workspace/tmp/backend_konanFI9/app/services/openai_client.py:9:    headers = {"Authorization": f"Bearer {settings.OPENAI_API_KEY}", "Content-Type": "application/json"}
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:76:/workspace/tmp/backend_konanFI9/app/session.py:17:    db.refresh(new_message)
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:77:/workspace/tmp/backend_konanFI9/app/utils/auth_bypass.py:15:    hashed_password="",
/workspace/konanfi9-web/docs/audit_tmp/auth_raw.txt:78:/workspace/tmp/backend_konanFI9/app/vector/embeddings.py:20:    headers = {"Authorization": f"Bearer {OPENAI_API_KEY}", "Content-Type":"application/json"}
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:1:/workspace/tmp/backend_konanFI9/app/api/auth.py:6:from sqlalchemy.orm import Session
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:2:/workspace/tmp/backend_konanFI9/app/api/auth.py:9:from app.database import get_db
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:3:/workspace/tmp/backend_konanFI9/app/api/auth.py:36:def register_user(p: UserCreate, db: Session = Depends(get_db)):
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:4:/workspace/tmp/backend_konanFI9/app/api/auth.py:57:def login_user(p: Login, db: Session = Depends(get_db)):
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:5:/workspace/tmp/backend_konanFI9/app/api/auth.py:74:def _user_from_token(creds: HTTPAuthorizationCredentials | None, db: Session) -> User:
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:6:/workspace/tmp/backend_konanFI9/app/api/auth.py:94:def _current_user(creds: HTTPAuthorizationCredentials = Depends(bearer), db: Session = Depends(get_db)) -> User:
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:7:/workspace/tmp/backend_konanFI9/app/api/auth.py:100:    db: Session = Depends(get_db),
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:8:/workspace/tmp/backend_konanFI9/app/api/auth_seed.py:2:from sqlalchemy.orm import Session
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:9:/workspace/tmp/backend_konanFI9/app/api/auth_seed.py:4:from app.database import get_db
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:10:/workspace/tmp/backend_konanFI9/app/api/auth_seed.py:12:def seed_test_user(db: Session = Depends(get_db)):
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:11:/workspace/tmp/backend_konanFI9/app/api/files.py:7:from sqlalchemy.orm import Session
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:12:/workspace/tmp/backend_konanFI9/app/api/files.py:8:from app.db.session import get_db
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:13:/workspace/tmp/backend_konanFI9/app/api/files.py:21:async def upload_file(file: UploadFile = File(...), db: Session = Depends(get_db)):
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:14:/workspace/tmp/backend_konanFI9/app/api/files.py:54:def list_files(db: Session = Depends(get_db)):
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:15:/workspace/tmp/backend_konanFI9/app/api/files.py:70:def delete_file(file_id: int, db: Session = Depends(get_db)):
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:16:/workspace/tmp/backend_konanFI9/app/api/health.py:2:from sqlalchemy.orm import Session
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:17:/workspace/tmp/backend_konanFI9/app/api/health.py:3:from app.database import get_db
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:18:/workspace/tmp/backend_konanFI9/app/api/health.py:8:def health_check(db: Session = Depends(get_db)):
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:19:/workspace/tmp/backend_konanFI9/app/api/laws.py:6:from app.database import get_db
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:20:/workspace/tmp/backend_konanFI9/app/api/laws.py:49:    db = next(get_db())
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:21:/workspace/tmp/backend_konanFI9/app/api/laws.py:56:    db = next(get_db())
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:22:/workspace/tmp/backend_konanFI9/app/api/lawsold.py:14:from sqlalchemy.orm import Session
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:23:/workspace/tmp/backend_konanFI9/app/api/lawsold.py:16:from app.database import SessionLocal
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:24:/workspace/tmp/backend_konanFI9/app/api/lawsold.py:336:            db: Session = SessionLocal()
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:25:/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:6:from sqlalchemy.orm import Session
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:26:/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:9:from app.database import get_db
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:27:/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:25:    db: Session = Depends(get_db),
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:28:/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:57:async def create_conversation(request: Request, db: Session = Depends(get_db)):
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:29:/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:83:def update_conversation(conv_id: int, data: dict, db: Session = Depends(get_db)):
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:30:/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:100:def delete_conversation(conv_id: int, db: Session = Depends(get_db)):
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:31:/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:115:    db: Session = Depends(get_db),
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:32:/workspace/tmp/backend_konanFI9/app/api.py:3:from sqlalchemy.orm import Session
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:33:/workspace/tmp/backend_konanFI9/app/api.py:4:from .db import get_db, Base, engine
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:34:/workspace/tmp/backend_konanFI9/app/api.py:15:Base.metadata.create_all(bind=engine)
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:35:/workspace/tmp/backend_konanFI9/app/api.py:20:def register(data: UserCreate, db: Session = Depends(get_db)):
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:36:/workspace/tmp/backend_konanFI9/app/api.py:31:def login(data: UserCreate, db: Session = Depends(get_db)):
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:37:/workspace/tmp/backend_konanFI9/app/api.py:41:def seed_laws(db: Session = Depends(get_db)):
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:38:/workspace/tmp/backend_konanFI9/app/audit_db.py:3:from sqlalchemy import create_engine, inspect, text
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:39:/workspace/tmp/backend_konanFI9/app/audit_db.py:24:    engine = create_engine(DATABASE_URL)
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:40:/workspace/tmp/backend_konanFI9/app/audit_db.py:25:    with engine.connect() as conn:
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:41:/workspace/tmp/backend_konanFI9/app/audit_db.py:35:    inspector = inspect(engine)
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:42:/workspace/tmp/backend_konanFI9/app/config.py:2:from pydantic_settings import BaseSettings, SettingsConfigDict
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:43:/workspace/tmp/backend_konanFI9/app/config.py:4:from .core.config import Settings, settings
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:44:/workspace/tmp/backend_konanFI9/app/config.py:7:class Settings(BaseSettings):
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:45:/workspace/tmp/backend_konanFI9/app/config.py:41:    model_config = SettingsConfigDict(
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:46:/workspace/tmp/backend_konanFI9/app/config.py:77:settings = Settings()
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:47:/workspace/tmp/backend_konanFI9/app/core/chroma_client.py:3:from chromadb.config import Settings
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:48:/workspace/tmp/backend_konanFI9/app/core/config.py:2:from pydantic_settings import BaseSettings, SettingsConfigDict
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:49:/workspace/tmp/backend_konanFI9/app/core/config.py:7:class Settings(BaseSettings):
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:50:/workspace/tmp/backend_konanFI9/app/core/config.py:34:    model_config = SettingsConfigDict(
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:51:/workspace/tmp/backend_konanFI9/app/core/config.py:58:settings = Settings()
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:52:/workspace/tmp/backend_konanFI9/app/crud.py:1:from sqlalchemy.orm import Session
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:53:/workspace/tmp/backend_konanFI9/app/crud.py:4:def create_conversation(db: Session, session_id: str, role: str, message_user: str = None, message_konan: str = None):
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:54:/workspace/tmp/backend_konanFI9/app/crud.py:16:def get_conversations(db: Session, session_id: str):
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:55:/workspace/tmp/backend_konanFI9/app/database.py:7:from sqlalchemy import create_engine
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:56:/workspace/tmp/backend_konanFI9/app/database.py:8:from sqlalchemy.orm import sessionmaker, declarative_base
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:57:/workspace/tmp/backend_konanFI9/app/database.py:41:engine = create_engine(DATABASE_URL, pool_pre_ping=True, echo=False)
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:58:/workspace/tmp/backend_konanFI9/app/database.py:42:SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:59:/workspace/tmp/backend_konanFI9/app/database.py:43:Base = declarative_base()
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:60:/workspace/tmp/backend_konanFI9/app/database.py:46:def get_db():
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:61:/workspace/tmp/backend_konanFI9/app/database.py:47:    db = SessionLocal()
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:62:/workspace/tmp/backend_konanFI9/app/db/__init__.py:1:from sqlalchemy import create_engine
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:63:/workspace/tmp/backend_konanFI9/app/db/__init__.py:2:from sqlalchemy.orm import declarative_base
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:64:/workspace/tmp/backend_konanFI9/app/db/__init__.py:3:from sqlalchemy.orm import sessionmaker
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:65:/workspace/tmp/backend_konanFI9/app/db/__init__.py:6:# --- Configuration de la base PostgreSQL ---
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:66:/workspace/tmp/backend_konanFI9/app/db/__init__.py:16:engine = create_engine(DATABASE_URL)
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:67:/workspace/tmp/backend_konanFI9/app/db/__init__.py:17:SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:68:/workspace/tmp/backend_konanFI9/app/db/__init__.py:20:Base = declarative_base()
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:69:/workspace/tmp/backend_konanFI9/app/db/__init__.py:23:def get_db():
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:70:/workspace/tmp/backend_konanFI9/app/db/__init__.py:24:    db = SessionLocal()
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:71:/workspace/tmp/backend_konanFI9/app/db/base.py:4:from sqlalchemy.orm import declarative_base
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:72:/workspace/tmp/backend_konanFI9/app/db/base.py:6:Base = declarative_base()
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:73:/workspace/tmp/backend_konanFI9/app/db/session.py:3:from sqlalchemy import create_engine
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:74:/workspace/tmp/backend_konanFI9/app/db/session.py:4:from sqlalchemy.orm import declarative_base, sessionmaker
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:75:/workspace/tmp/backend_konanFI9/app/db/session.py:8:engine = create_engine(settings.db_url, pool_pre_ping=True, connect_args=_connect_args)
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:76:/workspace/tmp/backend_konanFI9/app/db/session.py:9:SessionLocal = sessionmaker(bind=engine, autocommit=False, autoflush=False)
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:77:/workspace/tmp/backend_konanFI9/app/db/session.py:10:Base = declarative_base()
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:78:/workspace/tmp/backend_konanFI9/app/db/session.py:12:def get_db() -> Generator:
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:79:/workspace/tmp/backend_konanFI9/app/db/session.py:13:    db = SessionLocal()
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:80:/workspace/tmp/backend_konanFI9/app/main.py:19:from sqlalchemy.orm import Session
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:81:/workspace/tmp/backend_konanFI9/app/main.py:24:from app.database import get_db, engine
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:82:/workspace/tmp/backend_konanFI9/app/main.py:54:logging.basicConfig(filename=LOG_FILE, level=logging.INFO, format="%(message)s", encoding="utf-8")
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:83:/workspace/tmp/backend_konanFI9/app/main.py:133:    with engine.connect() as conn:
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:84:/workspace/tmp/backend_konanFI9/app/memory.py:2:from sqlalchemy.orm import Session
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:85:/workspace/tmp/backend_konanFI9/app/memory.py:5:def add_message(db: Session, session_id: str, role: str, message: str):
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:86:/workspace/tmp/backend_konanFI9/app/memory.py:12:def get_history(db: Session, session_id: str, limit: int = 5):
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:87:/workspace/tmp/backend_konanFI9/app/routers/chat.py:6:from sqlalchemy.orm import Session
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:88:/workspace/tmp/backend_konanFI9/app/routers/chat.py:7:from app.database import get_db
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:89:/workspace/tmp/backend_konanFI9/app/routers/chat.py:27:def get_conversation_history(db: Session, session_id: str, limit: int = 10):
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:90:/workspace/tmp/backend_konanFI9/app/routers/chat.py:52:async def chat_endpoint(request: ChatRequest, db: Session = Depends(get_db)):
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:91:/workspace/tmp/backend_konanFI9/app/routers/files.py:3:from sqlalchemy.orm import Session
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:92:/workspace/tmp/backend_konanFI9/app/routers/files.py:5:from app.database import get_db
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:93:/workspace/tmp/backend_konanFI9/app/routers/files.py:12:def get_uploaded_file(file_id: str, db: Session = Depends(get_db), user=Depends(verify_jwt)):
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:94:/workspace/tmp/backend_konanFI9/app/routers/memory_vector.py:5:from chromadb.config import Settings
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:95:/workspace/tmp/backend_konanFI9/app/routers/memory_vector.py:15:    Settings(
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:96:/workspace/tmp/backend_konanFI9/app/routers/stripe_router.py:45:        session = stripe.checkout.Session.create(
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:97:/workspace/tmp/backend_konanFI9/app/routers/stripe_router.py:97:        session = stripe.checkout.Session.retrieve(session_id)
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:98:/workspace/tmp/backend_konanFI9/app/routers/user_router.py:2:from sqlalchemy.orm import Session
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:99:/workspace/tmp/backend_konanFI9/app/routers/user_router.py:3:from app.database import get_db
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:100:/workspace/tmp/backend_konanFI9/app/routers/user_router.py:11:def register(user: UserCreate, db: Session = Depends(get_db)):
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:101:/workspace/tmp/backend_konanFI9/app/routers/user_router.py:23:def login(data: UserLogin, db: Session = Depends(get_db)):
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:102:/workspace/tmp/backend_konanFI9/app/routers/user_router.py:31:def me(db: Session = Depends(get_db)):
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:103:/workspace/tmp/backend_konanFI9/app/schemas/law_schema.py:11:    class Config:
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:104:/workspace/tmp/backend_konanFI9/app/schemas/user.py:19:    class Config:
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:105:/workspace/tmp/backend_konanFI9/app/schemas/user_schemas.py:23:    class Config:
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:106:/workspace/tmp/backend_konanFI9/app/session.py:1:from sqlalchemy.orm import Session
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:107:/workspace/tmp/backend_konanFI9/app/session.py:5:def add_message(db: Session, session_id: str, sender: str, message: str):
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:108:/workspace/tmp/backend_konanFI9/app/session.py:22:def get_history(db: Session, session_id: str):
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:109:/workspace/tmp/backend_konanFI9/app/vector/chroma_manager.py:7:from chromadb.config import Settings
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:110:/workspace/tmp/backend_konanFI9/app/vector/chroma_manager.py:20:        Settings(
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:111:/workspace/tmp/backend_konanFI9/app/vector/chroma_manager.py:139:from chromadb.config import Settings
/workspace/konanfi9-web/docs/audit_tmp/config_raw.txt:112:/workspace/tmp/backend_konanFI9/app/vector/chroma_manager.py:152:        Settings(
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:1:/workspace/tmp/backend_konanFI9/app/api/admin_update.py:14:@router.post("/reindex")
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:2:/workspace/tmp/backend_konanFI9/app/api/admin_update.py:20:@router.post("/update")
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:3:/workspace/tmp/backend_konanFI9/app/api/api.py:6:@router.post("/upsert")
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:4:/workspace/tmp/backend_konanFI9/app/api/api.py:15:@router.get("/")
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:5:/workspace/tmp/backend_konanFI9/app/api/auth.py:35:@router.post("/register")
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:6:/workspace/tmp/backend_konanFI9/app/api/auth.py:36:def register_user(p: UserCreate, db: Session = Depends(get_db)):
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:7:/workspace/tmp/backend_konanFI9/app/api/auth.py:56:@router.post("/login")
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:8:/workspace/tmp/backend_konanFI9/app/api/auth.py:57:def login_user(p: Login, db: Session = Depends(get_db)):
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:9:/workspace/tmp/backend_konanFI9/app/api/auth.py:94:def _current_user(creds: HTTPAuthorizationCredentials = Depends(bearer), db: Session = Depends(get_db)) -> User:
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:10:/workspace/tmp/backend_konanFI9/app/api/auth.py:99:    creds: HTTPAuthorizationCredentials | None = Depends(bearer),
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:11:/workspace/tmp/backend_konanFI9/app/api/auth.py:100:    db: Session = Depends(get_db),
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:12:/workspace/tmp/backend_konanFI9/app/api/auth.py:110:@router.get("/me")
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:13:/workspace/tmp/backend_konanFI9/app/api/auth.py:111:def me(user: User = Depends(current_user)):
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:14:/workspace/tmp/backend_konanFI9/app/api/auth_seed.py:11:@router.post("/seed-test-user")
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:15:/workspace/tmp/backend_konanFI9/app/api/auth_seed.py:12:def seed_test_user(db: Session = Depends(get_db)):
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:16:/workspace/tmp/backend_konanFI9/app/api/files.py:20:@router.post("/upload", summary="Uploader un fichier vers le serveur")
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:17:/workspace/tmp/backend_konanFI9/app/api/files.py:21:async def upload_file(file: UploadFile = File(...), db: Session = Depends(get_db)):
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:18:/workspace/tmp/backend_konanFI9/app/api/files.py:53:@router.get("/list", summary="Lister les fichiers enregistrés")
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:19:/workspace/tmp/backend_konanFI9/app/api/files.py:54:def list_files(db: Session = Depends(get_db)):
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:20:/workspace/tmp/backend_konanFI9/app/api/files.py:69:@router.delete("/{file_id}", summary="Supprimer un fichier")
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:21:/workspace/tmp/backend_konanFI9/app/api/files.py:70:def delete_file(file_id: int, db: Session = Depends(get_db)):
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:22:/workspace/tmp/backend_konanFI9/app/api/health.py:7:@router.get("/health")
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:23:/workspace/tmp/backend_konanFI9/app/api/health.py:8:def health_check(db: Session = Depends(get_db)):
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:24:/workspace/tmp/backend_konanFI9/app/api/laws.py:18:@router.get("/search")
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:25:/workspace/tmp/backend_konanFI9/app/api/laws.py:27:@router.post("/reindex")
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:26:/workspace/tmp/backend_konanFI9/app/api/laws.py:37:@router.get("/stats")
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:27:/workspace/tmp/backend_konanFI9/app/api/laws.py:47:@router.get("/all")
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:28:/workspace/tmp/backend_konanFI9/app/api/laws.py:54:@router.get("/{law_id}")
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:29:/workspace/tmp/backend_konanFI9/app/api/lawsold.py:85:@router.get("/search_law")
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:30:/workspace/tmp/backend_konanFI9/app/api/lawsold.py:93:@router.post("/index_laws")
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:31:/workspace/tmp/backend_konanFI9/app/api/lawsold.py:107:@router.delete("/reset_laws")
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:32:/workspace/tmp/backend_konanFI9/app/api/lawsold.py:124:@router.get("/stats_laws")
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:33:/workspace/tmp/backend_konanFI9/app/api/lawsold.py:178:@router.get("/notifications")
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:34:/workspace/tmp/backend_konanFI9/app/api/lawsold.py:193:@router.post("/notifications/mark_as_read")
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:35:/workspace/tmp/backend_konanFI9/app/api/lawsold.py:217:@router.post("/load_laws_from_url")
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:36:/workspace/tmp/backend_konanFI9/app/api/lawsold.py:283:@router.post("/laws/compare_version")
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:37:/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:16:    dependencies=[Depends(verify_jwt)]
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:38:/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:23:@router.get("")
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:39:/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:25:    db: Session = Depends(get_db),
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:40:/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:56:@router.post("")
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:41:/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:57:async def create_conversation(request: Request, db: Session = Depends(get_db)):
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:42:/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:82:@router.patch("/{conv_id}")
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:43:/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:83:def update_conversation(conv_id: int, data: dict, db: Session = Depends(get_db)):
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:44:/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:99:@router.delete("/{conv_id}")
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:45:/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:100:def delete_conversation(conv_id: int, db: Session = Depends(get_db)):
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:46:/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:112:@router.get("/{conv_id}/messages")
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:47:/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:115:    db: Session = Depends(get_db),
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:48:/workspace/tmp/backend_konanFI9/app/api/search.py:6:@router.post("/upsert")
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:49:/workspace/tmp/backend_konanFI9/app/api/search.py:15:@router.get("/")
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:50:/workspace/tmp/backend_konanFI9/app/api.py:19:@router.post("/auth/register", response_model=UserOut)
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:51:/workspace/tmp/backend_konanFI9/app/api.py:20:def register(data: UserCreate, db: Session = Depends(get_db)):
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:52:/workspace/tmp/backend_konanFI9/app/api.py:30:@router.post("/auth/login", response_model=Token)
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:53:/workspace/tmp/backend_konanFI9/app/api.py:31:def login(data: UserCreate, db: Session = Depends(get_db)):
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:54:/workspace/tmp/backend_konanFI9/app/api.py:40:@router.post("/seed")
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:55:/workspace/tmp/backend_konanFI9/app/api.py:41:def seed_laws(db: Session = Depends(get_db)):
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:56:/workspace/tmp/backend_konanFI9/app/api.py:64:@router.post("/chat", response_model=ChatResponse)
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:57:/workspace/tmp/backend_konanFI9/app/api.py:89:@router.post("/pdf")
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:58:/workspace/tmp/backend_konanFI9/app/core/security.py:52:def verify_jwt(credentials: HTTPAuthorizationCredentials = Depends(bearer_scheme)) -> Dict[str, Any]:
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:59:/workspace/tmp/backend_konanFI9/app/main.py:127:@app.get("/health")
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:60:/workspace/tmp/backend_konanFI9/app/main.py:131:@app.get("/test_db")
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:61:/workspace/tmp/backend_konanFI9/app/memory_vector.py:88:@router.get("/inspect")
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:62:/workspace/tmp/backend_konanFI9/app/memory_vector.py:104:@router.get("/stats")
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:63:/workspace/tmp/backend_konanFI9/app/memory_vector.py:121:@router.delete("/clear")
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:64:/workspace/tmp/backend_konanFI9/app/memory_vector.py:130:@router.get("/ping")
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:65:/workspace/tmp/backend_konanFI9/app/routers/auth_router.py:9:@router.post("/login")
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:66:/workspace/tmp/backend_konanFI9/app/routers/auth_router.py:18:@router.get("/me")
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:67:/workspace/tmp/backend_konanFI9/app/routers/auth_router.py:23:def get_current_user(token: str = Depends(lambda: None)):
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:68:/workspace/tmp/backend_konanFI9/app/routers/chat.py:51:@router.post("/chat", response_model=ChatResponse)
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:69:/workspace/tmp/backend_konanFI9/app/routers/chat.py:52:async def chat_endpoint(request: ChatRequest, db: Session = Depends(get_db)):
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:70:/workspace/tmp/backend_konanFI9/app/routers/chat.py:116:@router.get("/health")
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:71:/workspace/tmp/backend_konanFI9/app/routers/files.py:9:router = APIRouter(prefix="/api/files", tags=["files"], dependencies=[Depends(verify_jwt)])
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:72:/workspace/tmp/backend_konanFI9/app/routers/files.py:11:@router.get("/{file_id}")
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:73:/workspace/tmp/backend_konanFI9/app/routers/files.py:12:def get_uploaded_file(file_id: str, db: Session = Depends(get_db), user=Depends(verify_jwt)):
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:74:/workspace/tmp/backend_konanFI9/app/routers/laws_router.py:7:@router.get("/search", summary="Recherche sémantique dans les lois")
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:75:/workspace/tmp/backend_konanFI9/app/routers/memory_vector.py:21:@router.get("/stats")
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:76:/workspace/tmp/backend_konanFI9/app/routers/stripe_router.py:11:router = APIRouter(dependencies=[Depends(verify_jwt)])
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:77:/workspace/tmp/backend_konanFI9/app/routers/stripe_router.py:24:@router.post("/create-checkout-session")
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:78:/workspace/tmp/backend_konanFI9/app/routers/stripe_router.py:59:@router.post("/webhook")
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:79:/workspace/tmp/backend_konanFI9/app/routers/stripe_router.py:71:@router.post("/verify-session")
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:80:/workspace/tmp/backend_konanFI9/app/routers/user_router.py:10:@router.post("/register", response_model=UserResponse)
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:81:/workspace/tmp/backend_konanFI9/app/routers/user_router.py:11:def register(user: UserCreate, db: Session = Depends(get_db)):
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:82:/workspace/tmp/backend_konanFI9/app/routers/user_router.py:22:@router.post("/login")
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:83:/workspace/tmp/backend_konanFI9/app/routers/user_router.py:23:def login(data: UserLogin, db: Session = Depends(get_db)):
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:84:/workspace/tmp/backend_konanFI9/app/routers/user_router.py:30:@router.get("/me", response_model=UserResponse)
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:85:/workspace/tmp/backend_konanFI9/app/routers/user_router.py:31:def me(db: Session = Depends(get_db)):
/workspace/konanfi9-web/docs/audit_tmp/endpoints_payloads_raw.txt:86:/workspace/tmp/backend_konanFI9/app/routers/user_router.py:34:@router.get("/plans")
/workspace/konanfi9-web/docs/audit_tmp/main_candidates.txt:1:/workspace/tmp/backend_konanFI9/app/main.py
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:1:/workspace/tmp/backend_konanFI9/app/api/admin_update.py:1:from fastapi import APIRouter, Header, HTTPException
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:2:/workspace/tmp/backend_konanFI9/app/api/admin_update.py:6:router = APIRouter(prefix="/api/admin", tags=["admin"])
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:3:/workspace/tmp/backend_konanFI9/app/api/admin_update.py:14:@router.post("/reindex")
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:4:/workspace/tmp/backend_konanFI9/app/api/admin_update.py:20:@router.post("/update")
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:5:/workspace/tmp/backend_konanFI9/app/api/api.py:1:from fastapi import APIRouter
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:6:/workspace/tmp/backend_konanFI9/app/api/api.py:4:router = APIRouter(prefix="/search", tags=["search"])
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:7:/workspace/tmp/backend_konanFI9/app/api/api.py:6:@router.post("/upsert")
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:8:/workspace/tmp/backend_konanFI9/app/api/api.py:15:@router.get("/")
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:9:/workspace/tmp/backend_konanFI9/app/api/auth.py:3:from fastapi import APIRouter, Depends, HTTPException, status
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:10:/workspace/tmp/backend_konanFI9/app/api/auth.py:14:router = APIRouter(tags=["Auth"])
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:11:/workspace/tmp/backend_konanFI9/app/api/auth.py:35:@router.post("/register")
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:12:/workspace/tmp/backend_konanFI9/app/api/auth.py:56:@router.post("/login")
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:13:/workspace/tmp/backend_konanFI9/app/api/auth.py:110:@router.get("/me")
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:14:/workspace/tmp/backend_konanFI9/app/api/auth_seed.py:1:from fastapi import APIRouter, Depends
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:15:/workspace/tmp/backend_konanFI9/app/api/auth_seed.py:8:router = APIRouter(tags=["Auth Seed"])
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:16:/workspace/tmp/backend_konanFI9/app/api/auth_seed.py:11:@router.post("/seed-test-user")
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:17:/workspace/tmp/backend_konanFI9/app/api/files.py:6:from fastapi import APIRouter, UploadFile, File, HTTPException, Depends
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:18:/workspace/tmp/backend_konanFI9/app/api/files.py:11:router = APIRouter(tags=["Files"])
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:19:/workspace/tmp/backend_konanFI9/app/api/files.py:20:@router.post("/upload", summary="Uploader un fichier vers le serveur")
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:20:/workspace/tmp/backend_konanFI9/app/api/files.py:53:@router.get("/list", summary="Lister les fichiers enregistrés")
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:21:/workspace/tmp/backend_konanFI9/app/api/files.py:69:@router.delete("/{file_id}", summary="Supprimer un fichier")
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:22:/workspace/tmp/backend_konanFI9/app/api/health.py:1:from fastapi import APIRouter, Depends
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:23:/workspace/tmp/backend_konanFI9/app/api/health.py:5:router = APIRouter()
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:24:/workspace/tmp/backend_konanFI9/app/api/health.py:7:@router.get("/health")
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:25:/workspace/tmp/backend_konanFI9/app/api/laws.py:4:from fastapi import APIRouter, HTTPException, Query, Header
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:26:/workspace/tmp/backend_konanFI9/app/api/laws.py:10:router = APIRouter(prefix="/api/laws", tags=["Lois tunisiennes"])
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:27:/workspace/tmp/backend_konanFI9/app/api/laws.py:18:@router.get("/search")
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:28:/workspace/tmp/backend_konanFI9/app/api/laws.py:27:@router.post("/reindex")
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:29:/workspace/tmp/backend_konanFI9/app/api/laws.py:37:@router.get("/stats")
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:30:/workspace/tmp/backend_konanFI9/app/api/laws.py:47:@router.get("/all")
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:31:/workspace/tmp/backend_konanFI9/app/api/laws.py:54:@router.get("/{law_id}")
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:32:/workspace/tmp/backend_konanFI9/app/api/laws_ws.py:4:from fastapi import APIRouter, WebSocket, WebSocketDisconnect
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:33:/workspace/tmp/backend_konanFI9/app/api/laws_ws.py:7:router = APIRouter(prefix="/ws", tags=["WebSocket Notifications"])
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:34:/workspace/tmp/backend_konanFI9/app/api/lawsold.py:12:from fastapi import APIRouter, Query, HTTPException, Header
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:35:/workspace/tmp/backend_konanFI9/app/api/lawsold.py:19:router = APIRouter(prefix="/api", tags=["Lois tunisiennes"])
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:36:/workspace/tmp/backend_konanFI9/app/api/lawsold.py:85:@router.get("/search_law")
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:37:/workspace/tmp/backend_konanFI9/app/api/lawsold.py:93:@router.post("/index_laws")
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:38:/workspace/tmp/backend_konanFI9/app/api/lawsold.py:107:@router.delete("/reset_laws")
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:39:/workspace/tmp/backend_konanFI9/app/api/lawsold.py:124:@router.get("/stats_laws")
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:40:/workspace/tmp/backend_konanFI9/app/api/lawsold.py:178:@router.get("/notifications")
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:41:/workspace/tmp/backend_konanFI9/app/api/lawsold.py:193:@router.post("/notifications/mark_as_read")
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:42:/workspace/tmp/backend_konanFI9/app/api/lawsold.py:217:@router.post("/load_laws_from_url")
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:43:/workspace/tmp/backend_konanFI9/app/api/lawsold.py:283:@router.post("/laws/compare_version")
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:44:/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:5:from fastapi import APIRouter, Depends, HTTPException, Query, Request
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:45:/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:13:router = APIRouter(
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:46:/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:23:@router.get("")
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:47:/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:56:@router.post("")
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:48:/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:82:@router.patch("/{conv_id}")
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:49:/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:99:@router.delete("/{conv_id}")
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:50:/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:112:@router.get("/{conv_id}/messages")
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:51:/workspace/tmp/backend_konanFI9/app/api/search.py:1:from fastapi import APIRouter
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:52:/workspace/tmp/backend_konanFI9/app/api/search.py:4:router = APIRouter(prefix="/search", tags=["search"])
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:53:/workspace/tmp/backend_konanFI9/app/api/search.py:6:@router.post("/upsert")
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:54:/workspace/tmp/backend_konanFI9/app/api/search.py:15:@router.get("/")
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:55:/workspace/tmp/backend_konanFI9/app/api.py:1:from fastapi import APIRouter, Depends, HTTPException
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:56:/workspace/tmp/backend_konanFI9/app/api.py:14:router = APIRouter()
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:57:/workspace/tmp/backend_konanFI9/app/api.py:19:@router.post("/auth/register", response_model=UserOut)
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:58:/workspace/tmp/backend_konanFI9/app/api.py:30:@router.post("/auth/login", response_model=Token)
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:59:/workspace/tmp/backend_konanFI9/app/api.py:40:@router.post("/seed")
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:60:/workspace/tmp/backend_konanFI9/app/api.py:64:@router.post("/chat", response_model=ChatResponse)
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:61:/workspace/tmp/backend_konanFI9/app/api.py:89:@router.post("/pdf")
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:62:/workspace/tmp/backend_konanFI9/app/main.py:115:app.include_router(auth_router, prefix="/api/auth", tags=["Auth"])
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:63:/workspace/tmp/backend_konanFI9/app/main.py:116:app.include_router(auth_seed.router, prefix="/api/auth", tags=["Auth"])
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:64:/workspace/tmp/backend_konanFI9/app/main.py:117:app.include_router(memory_vector_router, prefix="/api/memory", tags=["Memory"])
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:65:/workspace/tmp/backend_konanFI9/app/main.py:118:app.include_router(chat_router, prefix="/api", tags=["Chat"])
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:66:/workspace/tmp/backend_konanFI9/app/main.py:119:app.include_router(laws.router, prefix="/api/laws", tags=["Laws"])
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:67:/workspace/tmp/backend_konanFI9/app/main.py:120:app.include_router(files.router, prefix="/api/files", tags=["Files"])
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:68:/workspace/tmp/backend_konanFI9/app/main.py:121:app.include_router(conversations.router, prefix="/api/conversations", tags=["Conversations"])
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:69:/workspace/tmp/backend_konanFI9/app/main.py:122:app.include_router(stripe_router.router, prefix="/api/stripe", tags=["Stripe"])
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:70:/workspace/tmp/backend_konanFI9/app/main.py:127:@app.get("/health")
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:71:/workspace/tmp/backend_konanFI9/app/main.py:131:@app.get("/test_db")
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:72:/workspace/tmp/backend_konanFI9/app/memory_vector.py:7:from fastapi import APIRouter, HTTPException
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:73:/workspace/tmp/backend_konanFI9/app/memory_vector.py:86:router = APIRouter(prefix="/api/memory", tags=["Memory Vectorielle"])
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:74:/workspace/tmp/backend_konanFI9/app/memory_vector.py:88:@router.get("/inspect")
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:75:/workspace/tmp/backend_konanFI9/app/memory_vector.py:104:@router.get("/stats")
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:76:/workspace/tmp/backend_konanFI9/app/memory_vector.py:121:@router.delete("/clear")
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:77:/workspace/tmp/backend_konanFI9/app/memory_vector.py:130:@router.get("/ping")
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:78:/workspace/tmp/backend_konanFI9/app/routers/auth_router.py:4:from fastapi import APIRouter, HTTPException, status, Depends
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:79:/workspace/tmp/backend_konanFI9/app/routers/auth_router.py:6:router = APIRouter(prefix="/auth", tags=["Auth (mock)"])
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:80:/workspace/tmp/backend_konanFI9/app/routers/auth_router.py:9:@router.post("/login")
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:81:/workspace/tmp/backend_konanFI9/app/routers/auth_router.py:18:@router.get("/me")
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:82:/workspace/tmp/backend_konanFI9/app/routers/chat.py:5:from fastapi import APIRouter, Depends, HTTPException
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:83:/workspace/tmp/backend_konanFI9/app/routers/chat.py:21:router = APIRouter(prefix="/api", tags=["chat"])
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:84:/workspace/tmp/backend_konanFI9/app/routers/chat.py:51:@router.post("/chat", response_model=ChatResponse)
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:85:/workspace/tmp/backend_konanFI9/app/routers/chat.py:116:@router.get("/health")
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:86:/workspace/tmp/backend_konanFI9/app/routers/files.py:1:from fastapi import APIRouter, Depends, HTTPException
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:87:/workspace/tmp/backend_konanFI9/app/routers/files.py:9:router = APIRouter(prefix="/api/files", tags=["files"], dependencies=[Depends(verify_jwt)])
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:88:/workspace/tmp/backend_konanFI9/app/routers/files.py:11:@router.get("/{file_id}")
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:89:/workspace/tmp/backend_konanFI9/app/routers/laws_router.py:2:from fastapi import APIRouter, Query
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:90:/workspace/tmp/backend_konanFI9/app/routers/laws_router.py:5:router = APIRouter(prefix="/api/laws", tags=["Laws"])
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:91:/workspace/tmp/backend_konanFI9/app/routers/laws_router.py:7:@router.get("/search", summary="Recherche sémantique dans les lois")
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:92:/workspace/tmp/backend_konanFI9/app/routers/memory_vector.py:3:from fastapi import APIRouter
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:93:/workspace/tmp/backend_konanFI9/app/routers/memory_vector.py:7:router = APIRouter(prefix="/memory", tags=["Vector Memory"])
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:94:/workspace/tmp/backend_konanFI9/app/routers/memory_vector.py:21:@router.get("/stats")
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:95:/workspace/tmp/backend_konanFI9/app/routers/stripe_router.py:1:from fastapi import APIRouter, HTTPException, Request, Depends
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:96:/workspace/tmp/backend_konanFI9/app/routers/stripe_router.py:11:router = APIRouter(dependencies=[Depends(verify_jwt)])
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:97:/workspace/tmp/backend_konanFI9/app/routers/stripe_router.py:24:@router.post("/create-checkout-session")
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:98:/workspace/tmp/backend_konanFI9/app/routers/stripe_router.py:59:@router.post("/webhook")
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:99:/workspace/tmp/backend_konanFI9/app/routers/stripe_router.py:71:@router.post("/verify-session")
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:100:/workspace/tmp/backend_konanFI9/app/routers/user_router.py:1:from fastapi import APIRouter, Depends, HTTPException, status
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:101:/workspace/tmp/backend_konanFI9/app/routers/user_router.py:8:router = APIRouter(prefix="/api/auth", tags=["auth"])
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:102:/workspace/tmp/backend_konanFI9/app/routers/user_router.py:10:@router.post("/register", response_model=UserResponse)
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:103:/workspace/tmp/backend_konanFI9/app/routers/user_router.py:22:@router.post("/login")
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:104:/workspace/tmp/backend_konanFI9/app/routers/user_router.py:30:@router.get("/me", response_model=UserResponse)
/workspace/konanfi9-web/docs/audit_tmp/routers_endpoints_raw.txt:105:/workspace/tmp/backend_konanFI9/app/routers/user_router.py:34:@router.get("/plans")
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:1:/workspace/tmp/backend_konanFI9/app/agents/domains/administratif.py:2:class AdministratifAgent(BaseAgent):
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:2:/workspace/tmp/backend_konanFI9/app/agents/domains/civil.py:2:class CivilAgent(BaseAgent):
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:3:/workspace/tmp/backend_konanFI9/app/agents/domains/commercial.py:2:class CommercialAgent(BaseAgent):
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:4:/workspace/tmp/backend_konanFI9/app/agents/domains/constitution.py:2:class ConstitutionAgent(BaseAgent):
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:5:/workspace/tmp/backend_konanFI9/app/agents/domains/famille.py:2:class FamilleAgent(BaseAgent):
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:6:/workspace/tmp/backend_konanFI9/app/agents/domains/fiscalite.py:2:class FiscaliteAgent(BaseAgent):
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:7:/workspace/tmp/backend_konanFI9/app/agents/domains/immobilier.py:2:class ImmobilierAgent(BaseAgent):
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:8:/workspace/tmp/backend_konanFI9/app/agents/domains/penal.py:2:class PenalAgent(BaseAgent):
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:9:/workspace/tmp/backend_konanFI9/app/agents/domains/travail.py:2:class TravailAgent(BaseAgent):
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:10:/workspace/tmp/backend_konanFI9/app/api/api.py:2:from app.services.search import semantic_search, upsert_documents
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:11:/workspace/tmp/backend_konanFI9/app/api/auth.py:10:from app.models.user import User
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:12:/workspace/tmp/backend_konanFI9/app/api/auth.py:12:from app.utils.auth_bypass import optional_user
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:13:/workspace/tmp/backend_konanFI9/app/api/auth.py:21:class UserCreate(BaseModel):
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:14:/workspace/tmp/backend_konanFI9/app/api/auth.py:27:class Login(BaseModel):
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:15:/workspace/tmp/backend_konanFI9/app/api/auth_seed.py:5:from app.models.user import User, PlanType
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:16:/workspace/tmp/backend_konanFI9/app/api/files.py:9:from app.models.file_upload import FileUpload
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:17:/workspace/tmp/backend_konanFI9/app/api/lawsold.py:15:from app.models.law_diff_log import LawDiffLog
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:18:/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:10:from app.models.conversation import Conversation
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:19:/workspace/tmp/backend_konanFI9/app/api/search.py:2:from app.services.search import semantic_search, upsert_documents
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:20:/workspace/tmp/backend_konanFI9/app/api.py:5:from .models import User, LawArticle
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:21:/workspace/tmp/backend_konanFI9/app/api.py:6:from .schemas import UserCreate, Token, ChatRequest, ChatResponse, PDFRequest, UserOut
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:22:/workspace/tmp/backend_konanFI9/app/api.py:8:from .services.search import semantic_search, upsert_documents
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:23:/workspace/tmp/backend_konanFI9/app/api.py:9:from .services.openai_client import chat_completion
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:24:/workspace/tmp/backend_konanFI9/app/api.py:10:from .services.pdf import make_simple_pdf
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:25:/workspace/tmp/backend_konanFI9/app/config.py:7:class Settings(BaseSettings):
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:26:/workspace/tmp/backend_konanFI9/app/core/config.py:7:class Settings(BaseSettings):
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:27:/workspace/tmp/backend_konanFI9/app/crud.py:2:from app.models import Conversation
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:28:/workspace/tmp/backend_konanFI9/app/main.py:25:from app.models import Conversation
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:29:/workspace/tmp/backend_konanFI9/app/main.py:26:from app.schemas import ChatRequest
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:30:/workspace/tmp/backend_konanFI9/app/memory.py:3:from app import models
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:31:/workspace/tmp/backend_konanFI9/app/memory.py:6:    conv = models.Conversation(session_id=session_id, role=role, message=message)
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:32:/workspace/tmp/backend_konanFI9/app/memory.py:14:        db.query(models.Conversation)
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:33:/workspace/tmp/backend_konanFI9/app/memory.py:15:        .filter(models.Conversation.session_id == session_id)
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:34:/workspace/tmp/backend_konanFI9/app/memory.py:16:        .order_by(models.Conversation.created_at.desc())
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:35:/workspace/tmp/backend_konanFI9/app/models/__init__.py:1:from app.models.conversation import Conversation
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:36:/workspace/tmp/backend_konanFI9/app/models/__init__.py:2:from app.models.user import User
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:37:/workspace/tmp/backend_konanFI9/app/models/__init__.py:3:from app.models.file_upload import FileUpload  # ✅ ajout ici
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:38:/workspace/tmp/backend_konanFI9/app/models/conversation.py:1:# app/models/conversation.py
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:39:/workspace/tmp/backend_konanFI9/app/models/conversation.py:8:class Conversation(Base):
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:40:/workspace/tmp/backend_konanFI9/app/models/file_upload.py:4:class FileUpload(Base):
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:41:/workspace/tmp/backend_konanFI9/app/models/law.py:5:class LawArticle(Base):
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:42:/workspace/tmp/backend_konanFI9/app/models/law_article.py:4:class LawArticle(Base):
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:43:/workspace/tmp/backend_konanFI9/app/models/law_diff_log.py:2:# app/models/law_diff_log.py — Historique des comparaisons de lois
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:44:/workspace/tmp/backend_konanFI9/app/models/law_diff_log.py:8:class LawDiffLog(Base):
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:45:/workspace/tmp/backend_konanFI9/app/models/user.py:11:class User(Base):
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:46:/workspace/tmp/backend_konanFI9/app/models.py:1:# app/models.py
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:47:/workspace/tmp/backend_konanFI9/app/models.py:6:class Conversation(Base):
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:48:/workspace/tmp/backend_konanFI9/app/models.py:17:class LawArticle(Base):
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:49:/workspace/tmp/backend_konanFI9/app/models.py:28:class RefLanguage(Base):
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:50:/workspace/tmp/backend_konanFI9/app/models.py:37:class CurrentArticlesV(Base):
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:51:/workspace/tmp/backend_konanFI9/app/routers/chat.py:8:from app.models import Conversation
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:52:/workspace/tmp/backend_konanFI9/app/routers/chat.py:9:from app.schemas import ChatRequest, ChatResponse
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:53:/workspace/tmp/backend_konanFI9/app/routers/chat.py:10:from app.utils.lang_detector import detect_language
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:54:/workspace/tmp/backend_konanFI9/app/routers/chat.py:14:from app.services.llm_service import call_llm_api
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:55:/workspace/tmp/backend_konanFI9/app/routers/files.py:4:from app.models import FileUpload  # table que tu as utilisée pour stocker les fichiers
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:56:/workspace/tmp/backend_konanFI9/app/routers/user_router.py:4:from app.models.user import User, PlanType
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:57:/workspace/tmp/backend_konanFI9/app/routers/user_router.py:5:from app.schemas.user_schemas import UserCreate, UserLogin, UserResponse
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:58:/workspace/tmp/backend_konanFI9/app/schemas/__init__.py:2:# app/schemas/__init__.py — Modèles de base pour l'API Konan
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:59:/workspace/tmp/backend_konanFI9/app/schemas/__init__.py:6:class ChatRequest(BaseModel):
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:60:/workspace/tmp/backend_konanFI9/app/schemas/__init__.py:10:class ChatResponse(BaseModel):
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:61:/workspace/tmp/backend_konanFI9/app/schemas/diff_schema.py:3:class LawDiffItem(BaseModel):
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:62:/workspace/tmp/backend_konanFI9/app/schemas/law_schema.py:3:class LawArticleIn(BaseModel):
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:63:/workspace/tmp/backend_konanFI9/app/schemas/user.py:2:# app/schemas/user.py — Schémas Pydantic (Konan API)
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:64:/workspace/tmp/backend_konanFI9/app/schemas/user.py:8:class UserCreate(BaseModel):
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:65:/workspace/tmp/backend_konanFI9/app/schemas/user.py:13:class UserOut(BaseModel):
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:66:/workspace/tmp/backend_konanFI9/app/schemas/user.py:22:class Login(BaseModel):
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:67:/workspace/tmp/backend_konanFI9/app/schemas/user.py:26:class Token(BaseModel):
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:68:/workspace/tmp/backend_konanFI9/app/schemas/user_schemas.py:9:class UserCreate(BaseModel):
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:69:/workspace/tmp/backend_konanFI9/app/schemas/user_schemas.py:14:class UserLogin(BaseModel):
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:70:/workspace/tmp/backend_konanFI9/app/schemas/user_schemas.py:18:class UserResponse(BaseModel):
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:71:/workspace/tmp/backend_konanFI9/app/schemas.py:2:# app/schemas.py — Phase 3 stable finale
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:72:/workspace/tmp/backend_konanFI9/app/schemas.py:7:class ChatRequest(BaseModel):
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:73:/workspace/tmp/backend_konanFI9/app/schemas.py:11:class ChatResponse(BaseModel):
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:74:/workspace/tmp/backend_konanFI9/app/services/llm_service.py:1:# app/services/llm_service.py
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:75:/workspace/tmp/backend_konanFI9/app/services/search.py:1:# app/services/search.py
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:76:/workspace/tmp/backend_konanFI9/app/services/search.py:4:from chromadb.utils import embedding_functions
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:77:/workspace/tmp/backend_konanFI9/app/session.py:2:from app.models.conversation import Conversation
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:78:/workspace/tmp/backend_konanFI9/app/utils/auth_bypass.py:7:from app.models.user import User, PlanType
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:79:/workspace/tmp/backend_konanFI9/app/vector/index_laws.py:2:from app.utils.parser import iter_jsonl
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:80:/workspace/tmp/backend_konanFI9/app/vector/index_laws.py:3:from app.utils.cleaner import clean_record
/workspace/konanfi9-web/docs/audit_tmp/structures_raw.txt:81:/workspace/tmp/backend_konanFI9/app/vector/update_scheduler.py:5:from app.utils.jort_scraper import fetch_to_jsonl
/workspace/konanfi9-web/docs/audit_tmp/tree_dirs.txt:1:/workspace/tmp/backend_konanFI9/app
/workspace/konanfi9-web/docs/audit_tmp/tree_dirs.txt:2:/workspace/tmp/backend_konanFI9/app/agents
/workspace/konanfi9-web/docs/audit_tmp/tree_dirs.txt:3:/workspace/tmp/backend_konanFI9/app/agents/domains
/workspace/konanfi9-web/docs/audit_tmp/tree_dirs.txt:4:/workspace/tmp/backend_konanFI9/app/api
/workspace/konanfi9-web/docs/audit_tmp/tree_dirs.txt:5:/workspace/tmp/backend_konanFI9/app/api/routes
/workspace/konanfi9-web/docs/audit_tmp/tree_dirs.txt:6:/workspace/tmp/backend_konanFI9/app/assets
/workspace/konanfi9-web/docs/audit_tmp/tree_dirs.txt:7:/workspace/tmp/backend_konanFI9/app/core
/workspace/konanfi9-web/docs/audit_tmp/tree_dirs.txt:8:/workspace/tmp/backend_konanFI9/app/data
/workspace/konanfi9-web/docs/audit_tmp/tree_dirs.txt:9:/workspace/tmp/backend_konanFI9/app/data/corpus
/workspace/konanfi9-web/docs/audit_tmp/tree_dirs.txt:10:/workspace/tmp/backend_konanFI9/app/db
/workspace/konanfi9-web/docs/audit_tmp/tree_dirs.txt:11:/workspace/tmp/backend_konanFI9/app/models
/workspace/konanfi9-web/docs/audit_tmp/tree_dirs.txt:12:/workspace/tmp/backend_konanFI9/app/routers
/workspace/konanfi9-web/docs/audit_tmp/tree_dirs.txt:13:/workspace/tmp/backend_konanFI9/app/schemas
/workspace/konanfi9-web/docs/audit_tmp/tree_dirs.txt:14:/workspace/tmp/backend_konanFI9/app/services
/workspace/konanfi9-web/docs/audit_tmp/tree_dirs.txt:15:/workspace/tmp/backend_konanFI9/app/utils
/workspace/konanfi9-web/docs/audit_tmp/tree_dirs.txt:16:/workspace/tmp/backend_konanFI9/app/vector
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:1:/workspace/tmp/backend_konanFI9/app/__init__.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:2:/workspace/tmp/backend_konanFI9/app/agents/base.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:3:/workspace/tmp/backend_konanFI9/app/agents/domains/administratif.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:4:/workspace/tmp/backend_konanFI9/app/agents/domains/civil.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:5:/workspace/tmp/backend_konanFI9/app/agents/domains/commercial.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:6:/workspace/tmp/backend_konanFI9/app/agents/domains/constitution.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:7:/workspace/tmp/backend_konanFI9/app/agents/domains/famille.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:8:/workspace/tmp/backend_konanFI9/app/agents/domains/fiscalite.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:9:/workspace/tmp/backend_konanFI9/app/agents/domains/immobilier.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:10:/workspace/tmp/backend_konanFI9/app/agents/domains/penal.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:11:/workspace/tmp/backend_konanFI9/app/agents/domains/travail.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:12:/workspace/tmp/backend_konanFI9/app/agents/registry.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:13:/workspace/tmp/backend_konanFI9/app/api/__init__.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:14:/workspace/tmp/backend_konanFI9/app/api/admin_update.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:15:/workspace/tmp/backend_konanFI9/app/api/api.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:16:/workspace/tmp/backend_konanFI9/app/api/auth.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:17:/workspace/tmp/backend_konanFI9/app/api/auth_seed.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:18:/workspace/tmp/backend_konanFI9/app/api/files.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:19:/workspace/tmp/backend_konanFI9/app/api/health.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:20:/workspace/tmp/backend_konanFI9/app/api/laws.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:21:/workspace/tmp/backend_konanFI9/app/api/laws_diff.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:22:/workspace/tmp/backend_konanFI9/app/api/laws_ws.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:23:/workspace/tmp/backend_konanFI9/app/api/lawsold.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:24:/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:25:/workspace/tmp/backend_konanFI9/app/api/search.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:26:/workspace/tmp/backend_konanFI9/app/api.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:27:/workspace/tmp/backend_konanFI9/app/audit_db.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:28:/workspace/tmp/backend_konanFI9/app/config.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:29:/workspace/tmp/backend_konanFI9/app/core/__init__.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:30:/workspace/tmp/backend_konanFI9/app/core/chroma_client.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:31:/workspace/tmp/backend_konanFI9/app/core/config.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:32:/workspace/tmp/backend_konanFI9/app/core/security.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:33:/workspace/tmp/backend_konanFI9/app/core/system_prompt.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:34:/workspace/tmp/backend_konanFI9/app/crud.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:35:/workspace/tmp/backend_konanFI9/app/database.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:36:/workspace/tmp/backend_konanFI9/app/db/__init__.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:37:/workspace/tmp/backend_konanFI9/app/db/base.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:38:/workspace/tmp/backend_konanFI9/app/db/session.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:39:/workspace/tmp/backend_konanFI9/app/main.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:40:/workspace/tmp/backend_konanFI9/app/memory.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:41:/workspace/tmp/backend_konanFI9/app/memory_vector.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:42:/workspace/tmp/backend_konanFI9/app/models/__init__.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:43:/workspace/tmp/backend_konanFI9/app/models/conversation.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:44:/workspace/tmp/backend_konanFI9/app/models/file_upload.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:45:/workspace/tmp/backend_konanFI9/app/models/law.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:46:/workspace/tmp/backend_konanFI9/app/models/law_article.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:47:/workspace/tmp/backend_konanFI9/app/models/law_diff_log.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:48:/workspace/tmp/backend_konanFI9/app/models/user.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:49:/workspace/tmp/backend_konanFI9/app/models.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:50:/workspace/tmp/backend_konanFI9/app/routers/__init__.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:51:/workspace/tmp/backend_konanFI9/app/routers/auth_router.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:52:/workspace/tmp/backend_konanFI9/app/routers/chat.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:53:/workspace/tmp/backend_konanFI9/app/routers/files.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:54:/workspace/tmp/backend_konanFI9/app/routers/laws_router.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:55:/workspace/tmp/backend_konanFI9/app/routers/memory_vector.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:56:/workspace/tmp/backend_konanFI9/app/routers/stripe_router.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:57:/workspace/tmp/backend_konanFI9/app/routers/user_router.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:58:/workspace/tmp/backend_konanFI9/app/schemas/__init__.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:59:/workspace/tmp/backend_konanFI9/app/schemas/diff_schema.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:60:/workspace/tmp/backend_konanFI9/app/schemas/law_schema.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:61:/workspace/tmp/backend_konanFI9/app/schemas/user.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:62:/workspace/tmp/backend_konanFI9/app/schemas/user_schemas.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:63:/workspace/tmp/backend_konanFI9/app/schemas.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:64:/workspace/tmp/backend_konanFI9/app/services/llm_service.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:65:/workspace/tmp/backend_konanFI9/app/services/openai_client.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:66:/workspace/tmp/backend_konanFI9/app/services/pdf.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:67:/workspace/tmp/backend_konanFI9/app/services/search.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:68:/workspace/tmp/backend_konanFI9/app/session.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:69:/workspace/tmp/backend_konanFI9/app/utils/__init__.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:70:/workspace/tmp/backend_konanFI9/app/utils/auth_bypass.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:71:/workspace/tmp/backend_konanFI9/app/utils/cleaner.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:72:/workspace/tmp/backend_konanFI9/app/utils/jort_scraper.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:73:/workspace/tmp/backend_konanFI9/app/utils/lang_detector.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:74:/workspace/tmp/backend_konanFI9/app/utils/parser.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:75:/workspace/tmp/backend_konanFI9/app/vector/__init__.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:76:/workspace/tmp/backend_konanFI9/app/vector/chroma_manager.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:77:/workspace/tmp/backend_konanFI9/app/vector/embeddings.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:78:/workspace/tmp/backend_konanFI9/app/vector/index_laws.py
/workspace/konanfi9-web/docs/audit_tmp/tree_py.txt:79:/workspace/tmp/backend_konanFI9/app/vector/update_scheduler.py
/workspace/konanfi9-web/docs/backend_audit.md:5:Local path: /workspace/tmp/backend_konanFI9
/workspace/konanfi9-web/docs/backend_audit_REEL.md:3:Source dossier analysé: /workspace/tmp/backend_konanFI9/app
/workspace/konanfi9-web/docs/backend_audit_REEL.md:7:/workspace/tmp/backend_konanFI9/app
/workspace/konanfi9-web/docs/backend_audit_REEL.md:8:/workspace/tmp/backend_konanFI9/app/agents
/workspace/konanfi9-web/docs/backend_audit_REEL.md:9:/workspace/tmp/backend_konanFI9/app/agents/domains
/workspace/konanfi9-web/docs/backend_audit_REEL.md:10:/workspace/tmp/backend_konanFI9/app/api
/workspace/konanfi9-web/docs/backend_audit_REEL.md:11:/workspace/tmp/backend_konanFI9/app/api/routes
/workspace/konanfi9-web/docs/backend_audit_REEL.md:12:/workspace/tmp/backend_konanFI9/app/assets
/workspace/konanfi9-web/docs/backend_audit_REEL.md:13:/workspace/tmp/backend_konanFI9/app/core
/workspace/konanfi9-web/docs/backend_audit_REEL.md:14:/workspace/tmp/backend_konanFI9/app/data
/workspace/konanfi9-web/docs/backend_audit_REEL.md:15:/workspace/tmp/backend_konanFI9/app/data/corpus
/workspace/konanfi9-web/docs/backend_audit_REEL.md:16:/workspace/tmp/backend_konanFI9/app/db
/workspace/konanfi9-web/docs/backend_audit_REEL.md:17:/workspace/tmp/backend_konanFI9/app/models
/workspace/konanfi9-web/docs/backend_audit_REEL.md:18:/workspace/tmp/backend_konanFI9/app/routers
/workspace/konanfi9-web/docs/backend_audit_REEL.md:19:/workspace/tmp/backend_konanFI9/app/schemas
/workspace/konanfi9-web/docs/backend_audit_REEL.md:20:/workspace/tmp/backend_konanFI9/app/services
/workspace/konanfi9-web/docs/backend_audit_REEL.md:21:/workspace/tmp/backend_konanFI9/app/utils
/workspace/konanfi9-web/docs/backend_audit_REEL.md:22:/workspace/tmp/backend_konanFI9/app/vector
/workspace/konanfi9-web/docs/backend_audit_REEL.md:25:/workspace/tmp/backend_konanFI9/app/__init__.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:26:/workspace/tmp/backend_konanFI9/app/agents/base.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:27:/workspace/tmp/backend_konanFI9/app/agents/domains/administratif.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:28:/workspace/tmp/backend_konanFI9/app/agents/domains/civil.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:29:/workspace/tmp/backend_konanFI9/app/agents/domains/commercial.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:30:/workspace/tmp/backend_konanFI9/app/agents/domains/constitution.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:31:/workspace/tmp/backend_konanFI9/app/agents/domains/famille.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:32:/workspace/tmp/backend_konanFI9/app/agents/domains/fiscalite.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:33:/workspace/tmp/backend_konanFI9/app/agents/domains/immobilier.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:34:/workspace/tmp/backend_konanFI9/app/agents/domains/penal.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:35:/workspace/tmp/backend_konanFI9/app/agents/domains/travail.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:36:/workspace/tmp/backend_konanFI9/app/agents/registry.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:37:/workspace/tmp/backend_konanFI9/app/api/__init__.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:38:/workspace/tmp/backend_konanFI9/app/api/admin_update.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:39:/workspace/tmp/backend_konanFI9/app/api/api.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:40:/workspace/tmp/backend_konanFI9/app/api/auth.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:41:/workspace/tmp/backend_konanFI9/app/api/auth_seed.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:42:/workspace/tmp/backend_konanFI9/app/api/files.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:43:/workspace/tmp/backend_konanFI9/app/api/health.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:44:/workspace/tmp/backend_konanFI9/app/api/laws.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:45:/workspace/tmp/backend_konanFI9/app/api/laws_diff.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:46:/workspace/tmp/backend_konanFI9/app/api/laws_ws.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:47:/workspace/tmp/backend_konanFI9/app/api/lawsold.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:48:/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:49:/workspace/tmp/backend_konanFI9/app/api/search.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:50:/workspace/tmp/backend_konanFI9/app/api.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:51:/workspace/tmp/backend_konanFI9/app/audit_db.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:52:/workspace/tmp/backend_konanFI9/app/config.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:53:/workspace/tmp/backend_konanFI9/app/core/__init__.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:54:/workspace/tmp/backend_konanFI9/app/core/chroma_client.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:55:/workspace/tmp/backend_konanFI9/app/core/config.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:56:/workspace/tmp/backend_konanFI9/app/core/security.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:57:/workspace/tmp/backend_konanFI9/app/core/system_prompt.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:58:/workspace/tmp/backend_konanFI9/app/crud.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:59:/workspace/tmp/backend_konanFI9/app/database.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:60:/workspace/tmp/backend_konanFI9/app/db/__init__.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:61:/workspace/tmp/backend_konanFI9/app/db/base.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:62:/workspace/tmp/backend_konanFI9/app/db/session.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:63:/workspace/tmp/backend_konanFI9/app/main.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:64:/workspace/tmp/backend_konanFI9/app/memory.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:65:/workspace/tmp/backend_konanFI9/app/memory_vector.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:66:/workspace/tmp/backend_konanFI9/app/models/__init__.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:67:/workspace/tmp/backend_konanFI9/app/models/conversation.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:68:/workspace/tmp/backend_konanFI9/app/models/file_upload.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:69:/workspace/tmp/backend_konanFI9/app/models/law.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:70:/workspace/tmp/backend_konanFI9/app/models/law_article.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:71:/workspace/tmp/backend_konanFI9/app/models/law_diff_log.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:72:/workspace/tmp/backend_konanFI9/app/models/user.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:73:/workspace/tmp/backend_konanFI9/app/models.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:74:/workspace/tmp/backend_konanFI9/app/routers/__init__.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:75:/workspace/tmp/backend_konanFI9/app/routers/auth_router.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:76:/workspace/tmp/backend_konanFI9/app/routers/chat.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:77:/workspace/tmp/backend_konanFI9/app/routers/files.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:78:/workspace/tmp/backend_konanFI9/app/routers/laws_router.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:79:/workspace/tmp/backend_konanFI9/app/routers/memory_vector.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:80:/workspace/tmp/backend_konanFI9/app/routers/stripe_router.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:81:/workspace/tmp/backend_konanFI9/app/routers/user_router.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:82:/workspace/tmp/backend_konanFI9/app/schemas/__init__.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:83:/workspace/tmp/backend_konanFI9/app/schemas/diff_schema.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:84:/workspace/tmp/backend_konanFI9/app/schemas/law_schema.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:85:/workspace/tmp/backend_konanFI9/app/schemas/user.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:86:/workspace/tmp/backend_konanFI9/app/schemas/user_schemas.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:87:/workspace/tmp/backend_konanFI9/app/schemas.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:88:/workspace/tmp/backend_konanFI9/app/services/llm_service.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:89:/workspace/tmp/backend_konanFI9/app/services/openai_client.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:90:/workspace/tmp/backend_konanFI9/app/services/pdf.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:91:/workspace/tmp/backend_konanFI9/app/services/search.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:92:/workspace/tmp/backend_konanFI9/app/session.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:93:/workspace/tmp/backend_konanFI9/app/utils/__init__.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:94:/workspace/tmp/backend_konanFI9/app/utils/auth_bypass.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:95:/workspace/tmp/backend_konanFI9/app/utils/cleaner.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:96:/workspace/tmp/backend_konanFI9/app/utils/jort_scraper.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:97:/workspace/tmp/backend_konanFI9/app/utils/lang_detector.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:98:/workspace/tmp/backend_konanFI9/app/utils/parser.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:99:/workspace/tmp/backend_konanFI9/app/vector/__init__.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:100:/workspace/tmp/backend_konanFI9/app/vector/chroma_manager.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:101:/workspace/tmp/backend_konanFI9/app/vector/embeddings.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:102:/workspace/tmp/backend_konanFI9/app/vector/index_laws.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:103:/workspace/tmp/backend_konanFI9/app/vector/update_scheduler.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:106:/workspace/tmp/backend_konanFI9/app/api/admin_update.py:1:from fastapi import APIRouter, Header, HTTPException
/workspace/konanfi9-web/docs/backend_audit_REEL.md:107:/workspace/tmp/backend_konanFI9/app/api/admin_update.py:6:router = APIRouter(prefix="/api/admin", tags=["admin"])
/workspace/konanfi9-web/docs/backend_audit_REEL.md:108:/workspace/tmp/backend_konanFI9/app/api/admin_update.py:14:@router.post("/reindex")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:109:/workspace/tmp/backend_konanFI9/app/api/admin_update.py:20:@router.post("/update")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:110:/workspace/tmp/backend_konanFI9/app/api/api.py:1:from fastapi import APIRouter
/workspace/konanfi9-web/docs/backend_audit_REEL.md:111:/workspace/tmp/backend_konanFI9/app/api/api.py:4:router = APIRouter(prefix="/search", tags=["search"])
/workspace/konanfi9-web/docs/backend_audit_REEL.md:112:/workspace/tmp/backend_konanFI9/app/api/api.py:6:@router.post("/upsert")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:113:/workspace/tmp/backend_konanFI9/app/api/api.py:15:@router.get("/")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:114:/workspace/tmp/backend_konanFI9/app/api/auth.py:3:from fastapi import APIRouter, Depends, HTTPException, status
/workspace/konanfi9-web/docs/backend_audit_REEL.md:115:/workspace/tmp/backend_konanFI9/app/api/auth.py:14:router = APIRouter(tags=["Auth"])
/workspace/konanfi9-web/docs/backend_audit_REEL.md:116:/workspace/tmp/backend_konanFI9/app/api/auth.py:35:@router.post("/register")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:117:/workspace/tmp/backend_konanFI9/app/api/auth.py:56:@router.post("/login")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:118:/workspace/tmp/backend_konanFI9/app/api/auth.py:110:@router.get("/me")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:119:/workspace/tmp/backend_konanFI9/app/api/auth_seed.py:1:from fastapi import APIRouter, Depends
/workspace/konanfi9-web/docs/backend_audit_REEL.md:120:/workspace/tmp/backend_konanFI9/app/api/auth_seed.py:8:router = APIRouter(tags=["Auth Seed"])
/workspace/konanfi9-web/docs/backend_audit_REEL.md:121:/workspace/tmp/backend_konanFI9/app/api/auth_seed.py:11:@router.post("/seed-test-user")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:122:/workspace/tmp/backend_konanFI9/app/api/files.py:6:from fastapi import APIRouter, UploadFile, File, HTTPException, Depends
/workspace/konanfi9-web/docs/backend_audit_REEL.md:123:/workspace/tmp/backend_konanFI9/app/api/files.py:11:router = APIRouter(tags=["Files"])
/workspace/konanfi9-web/docs/backend_audit_REEL.md:124:/workspace/tmp/backend_konanFI9/app/api/files.py:20:@router.post("/upload", summary="Uploader un fichier vers le serveur")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:125:/workspace/tmp/backend_konanFI9/app/api/files.py:53:@router.get("/list", summary="Lister les fichiers enregistrés")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:126:/workspace/tmp/backend_konanFI9/app/api/files.py:69:@router.delete("/{file_id}", summary="Supprimer un fichier")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:127:/workspace/tmp/backend_konanFI9/app/api/health.py:1:from fastapi import APIRouter, Depends
/workspace/konanfi9-web/docs/backend_audit_REEL.md:128:/workspace/tmp/backend_konanFI9/app/api/health.py:5:router = APIRouter()
/workspace/konanfi9-web/docs/backend_audit_REEL.md:129:/workspace/tmp/backend_konanFI9/app/api/health.py:7:@router.get("/health")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:130:/workspace/tmp/backend_konanFI9/app/api/laws.py:4:from fastapi import APIRouter, HTTPException, Query, Header
/workspace/konanfi9-web/docs/backend_audit_REEL.md:131:/workspace/tmp/backend_konanFI9/app/api/laws.py:10:router = APIRouter(prefix="/api/laws", tags=["Lois tunisiennes"])
/workspace/konanfi9-web/docs/backend_audit_REEL.md:132:/workspace/tmp/backend_konanFI9/app/api/laws.py:18:@router.get("/search")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:133:/workspace/tmp/backend_konanFI9/app/api/laws.py:27:@router.post("/reindex")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:134:/workspace/tmp/backend_konanFI9/app/api/laws.py:37:@router.get("/stats")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:135:/workspace/tmp/backend_konanFI9/app/api/laws.py:47:@router.get("/all")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:136:/workspace/tmp/backend_konanFI9/app/api/laws.py:54:@router.get("/{law_id}")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:137:/workspace/tmp/backend_konanFI9/app/api/laws_ws.py:4:from fastapi import APIRouter, WebSocket, WebSocketDisconnect
/workspace/konanfi9-web/docs/backend_audit_REEL.md:138:/workspace/tmp/backend_konanFI9/app/api/laws_ws.py:7:router = APIRouter(prefix="/ws", tags=["WebSocket Notifications"])
/workspace/konanfi9-web/docs/backend_audit_REEL.md:139:/workspace/tmp/backend_konanFI9/app/api/lawsold.py:12:from fastapi import APIRouter, Query, HTTPException, Header
/workspace/konanfi9-web/docs/backend_audit_REEL.md:140:/workspace/tmp/backend_konanFI9/app/api/lawsold.py:19:router = APIRouter(prefix="/api", tags=["Lois tunisiennes"])
/workspace/konanfi9-web/docs/backend_audit_REEL.md:141:/workspace/tmp/backend_konanFI9/app/api/lawsold.py:85:@router.get("/search_law")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:142:/workspace/tmp/backend_konanFI9/app/api/lawsold.py:93:@router.post("/index_laws")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:143:/workspace/tmp/backend_konanFI9/app/api/lawsold.py:107:@router.delete("/reset_laws")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:144:/workspace/tmp/backend_konanFI9/app/api/lawsold.py:124:@router.get("/stats_laws")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:145:/workspace/tmp/backend_konanFI9/app/api/lawsold.py:178:@router.get("/notifications")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:146:/workspace/tmp/backend_konanFI9/app/api/lawsold.py:193:@router.post("/notifications/mark_as_read")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:147:/workspace/tmp/backend_konanFI9/app/api/lawsold.py:217:@router.post("/load_laws_from_url")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:148:/workspace/tmp/backend_konanFI9/app/api/lawsold.py:283:@router.post("/laws/compare_version")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:149:/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:5:from fastapi import APIRouter, Depends, HTTPException, Query, Request
/workspace/konanfi9-web/docs/backend_audit_REEL.md:150:/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:13:router = APIRouter(
/workspace/konanfi9-web/docs/backend_audit_REEL.md:151:/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:23:@router.get("")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:152:/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:56:@router.post("")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:153:/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:82:@router.patch("/{conv_id}")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:154:/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:99:@router.delete("/{conv_id}")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:155:/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:112:@router.get("/{conv_id}/messages")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:156:/workspace/tmp/backend_konanFI9/app/api/search.py:1:from fastapi import APIRouter
/workspace/konanfi9-web/docs/backend_audit_REEL.md:157:/workspace/tmp/backend_konanFI9/app/api/search.py:4:router = APIRouter(prefix="/search", tags=["search"])
/workspace/konanfi9-web/docs/backend_audit_REEL.md:158:/workspace/tmp/backend_konanFI9/app/api/search.py:6:@router.post("/upsert")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:159:/workspace/tmp/backend_konanFI9/app/api/search.py:15:@router.get("/")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:160:/workspace/tmp/backend_konanFI9/app/api.py:1:from fastapi import APIRouter, Depends, HTTPException
/workspace/konanfi9-web/docs/backend_audit_REEL.md:161:/workspace/tmp/backend_konanFI9/app/api.py:14:router = APIRouter()
/workspace/konanfi9-web/docs/backend_audit_REEL.md:162:/workspace/tmp/backend_konanFI9/app/api.py:19:@router.post("/auth/register", response_model=UserOut)
/workspace/konanfi9-web/docs/backend_audit_REEL.md:163:/workspace/tmp/backend_konanFI9/app/api.py:30:@router.post("/auth/login", response_model=Token)
/workspace/konanfi9-web/docs/backend_audit_REEL.md:164:/workspace/tmp/backend_konanFI9/app/api.py:40:@router.post("/seed")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:165:/workspace/tmp/backend_konanFI9/app/api.py:64:@router.post("/chat", response_model=ChatResponse)
/workspace/konanfi9-web/docs/backend_audit_REEL.md:166:/workspace/tmp/backend_konanFI9/app/api.py:89:@router.post("/pdf")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:167:/workspace/tmp/backend_konanFI9/app/main.py:115:app.include_router(auth_router, prefix="/api/auth", tags=["Auth"])
/workspace/konanfi9-web/docs/backend_audit_REEL.md:168:/workspace/tmp/backend_konanFI9/app/main.py:116:app.include_router(auth_seed.router, prefix="/api/auth", tags=["Auth"])
/workspace/konanfi9-web/docs/backend_audit_REEL.md:169:/workspace/tmp/backend_konanFI9/app/main.py:117:app.include_router(memory_vector_router, prefix="/api/memory", tags=["Memory"])
/workspace/konanfi9-web/docs/backend_audit_REEL.md:170:/workspace/tmp/backend_konanFI9/app/main.py:118:app.include_router(chat_router, prefix="/api", tags=["Chat"])
/workspace/konanfi9-web/docs/backend_audit_REEL.md:171:/workspace/tmp/backend_konanFI9/app/main.py:119:app.include_router(laws.router, prefix="/api/laws", tags=["Laws"])
/workspace/konanfi9-web/docs/backend_audit_REEL.md:172:/workspace/tmp/backend_konanFI9/app/main.py:120:app.include_router(files.router, prefix="/api/files", tags=["Files"])
/workspace/konanfi9-web/docs/backend_audit_REEL.md:173:/workspace/tmp/backend_konanFI9/app/main.py:121:app.include_router(conversations.router, prefix="/api/conversations", tags=["Conversations"])
/workspace/konanfi9-web/docs/backend_audit_REEL.md:174:/workspace/tmp/backend_konanFI9/app/main.py:122:app.include_router(stripe_router.router, prefix="/api/stripe", tags=["Stripe"])
/workspace/konanfi9-web/docs/backend_audit_REEL.md:175:/workspace/tmp/backend_konanFI9/app/main.py:127:@app.get("/health")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:176:/workspace/tmp/backend_konanFI9/app/main.py:131:@app.get("/test_db")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:177:/workspace/tmp/backend_konanFI9/app/memory_vector.py:7:from fastapi import APIRouter, HTTPException
/workspace/konanfi9-web/docs/backend_audit_REEL.md:178:/workspace/tmp/backend_konanFI9/app/memory_vector.py:86:router = APIRouter(prefix="/api/memory", tags=["Memory Vectorielle"])
/workspace/konanfi9-web/docs/backend_audit_REEL.md:179:/workspace/tmp/backend_konanFI9/app/memory_vector.py:88:@router.get("/inspect")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:180:/workspace/tmp/backend_konanFI9/app/memory_vector.py:104:@router.get("/stats")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:181:/workspace/tmp/backend_konanFI9/app/memory_vector.py:121:@router.delete("/clear")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:182:/workspace/tmp/backend_konanFI9/app/memory_vector.py:130:@router.get("/ping")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:183:/workspace/tmp/backend_konanFI9/app/routers/auth_router.py:4:from fastapi import APIRouter, HTTPException, status, Depends
/workspace/konanfi9-web/docs/backend_audit_REEL.md:184:/workspace/tmp/backend_konanFI9/app/routers/auth_router.py:6:router = APIRouter(prefix="/auth", tags=["Auth (mock)"])
/workspace/konanfi9-web/docs/backend_audit_REEL.md:185:/workspace/tmp/backend_konanFI9/app/routers/auth_router.py:9:@router.post("/login")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:186:/workspace/tmp/backend_konanFI9/app/routers/auth_router.py:18:@router.get("/me")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:187:/workspace/tmp/backend_konanFI9/app/routers/chat.py:5:from fastapi import APIRouter, Depends, HTTPException
/workspace/konanfi9-web/docs/backend_audit_REEL.md:188:/workspace/tmp/backend_konanFI9/app/routers/chat.py:21:router = APIRouter(prefix="/api", tags=["chat"])
/workspace/konanfi9-web/docs/backend_audit_REEL.md:189:/workspace/tmp/backend_konanFI9/app/routers/chat.py:51:@router.post("/chat", response_model=ChatResponse)
/workspace/konanfi9-web/docs/backend_audit_REEL.md:190:/workspace/tmp/backend_konanFI9/app/routers/chat.py:116:@router.get("/health")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:191:/workspace/tmp/backend_konanFI9/app/routers/files.py:1:from fastapi import APIRouter, Depends, HTTPException
/workspace/konanfi9-web/docs/backend_audit_REEL.md:192:/workspace/tmp/backend_konanFI9/app/routers/files.py:9:router = APIRouter(prefix="/api/files", tags=["files"], dependencies=[Depends(verify_jwt)])
/workspace/konanfi9-web/docs/backend_audit_REEL.md:193:/workspace/tmp/backend_konanFI9/app/routers/files.py:11:@router.get("/{file_id}")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:194:/workspace/tmp/backend_konanFI9/app/routers/laws_router.py:2:from fastapi import APIRouter, Query
/workspace/konanfi9-web/docs/backend_audit_REEL.md:195:/workspace/tmp/backend_konanFI9/app/routers/laws_router.py:5:router = APIRouter(prefix="/api/laws", tags=["Laws"])
/workspace/konanfi9-web/docs/backend_audit_REEL.md:196:/workspace/tmp/backend_konanFI9/app/routers/laws_router.py:7:@router.get("/search", summary="Recherche sémantique dans les lois")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:197:/workspace/tmp/backend_konanFI9/app/routers/memory_vector.py:3:from fastapi import APIRouter
/workspace/konanfi9-web/docs/backend_audit_REEL.md:198:/workspace/tmp/backend_konanFI9/app/routers/memory_vector.py:7:router = APIRouter(prefix="/memory", tags=["Vector Memory"])
/workspace/konanfi9-web/docs/backend_audit_REEL.md:199:/workspace/tmp/backend_konanFI9/app/routers/memory_vector.py:21:@router.get("/stats")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:200:/workspace/tmp/backend_konanFI9/app/routers/stripe_router.py:1:from fastapi import APIRouter, HTTPException, Request, Depends
/workspace/konanfi9-web/docs/backend_audit_REEL.md:201:/workspace/tmp/backend_konanFI9/app/routers/stripe_router.py:11:router = APIRouter(dependencies=[Depends(verify_jwt)])
/workspace/konanfi9-web/docs/backend_audit_REEL.md:202:/workspace/tmp/backend_konanFI9/app/routers/stripe_router.py:24:@router.post("/create-checkout-session")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:203:/workspace/tmp/backend_konanFI9/app/routers/stripe_router.py:59:@router.post("/webhook")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:204:/workspace/tmp/backend_konanFI9/app/routers/stripe_router.py:71:@router.post("/verify-session")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:205:/workspace/tmp/backend_konanFI9/app/routers/user_router.py:1:from fastapi import APIRouter, Depends, HTTPException, status
/workspace/konanfi9-web/docs/backend_audit_REEL.md:206:/workspace/tmp/backend_konanFI9/app/routers/user_router.py:8:router = APIRouter(prefix="/api/auth", tags=["auth"])
/workspace/konanfi9-web/docs/backend_audit_REEL.md:207:/workspace/tmp/backend_konanFI9/app/routers/user_router.py:10:@router.post("/register", response_model=UserResponse)
/workspace/konanfi9-web/docs/backend_audit_REEL.md:208:/workspace/tmp/backend_konanFI9/app/routers/user_router.py:22:@router.post("/login")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:209:/workspace/tmp/backend_konanFI9/app/routers/user_router.py:30:@router.get("/me", response_model=UserResponse)
/workspace/konanfi9-web/docs/backend_audit_REEL.md:210:/workspace/tmp/backend_konanFI9/app/routers/user_router.py:34:@router.get("/plans")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:213:/workspace/tmp/backend_konanFI9/app/api/admin_update.py:14:@router.post("/reindex")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:214:/workspace/tmp/backend_konanFI9/app/api/admin_update.py:20:@router.post("/update")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:215:/workspace/tmp/backend_konanFI9/app/api/api.py:6:@router.post("/upsert")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:216:/workspace/tmp/backend_konanFI9/app/api/api.py:15:@router.get("/")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:217:/workspace/tmp/backend_konanFI9/app/api/auth.py:35:@router.post("/register")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:218:/workspace/tmp/backend_konanFI9/app/api/auth.py:36:def register_user(p: UserCreate, db: Session = Depends(get_db)):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:219:/workspace/tmp/backend_konanFI9/app/api/auth.py:56:@router.post("/login")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:220:/workspace/tmp/backend_konanFI9/app/api/auth.py:57:def login_user(p: Login, db: Session = Depends(get_db)):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:221:/workspace/tmp/backend_konanFI9/app/api/auth.py:94:def _current_user(creds: HTTPAuthorizationCredentials = Depends(bearer), db: Session = Depends(get_db)) -> User:
/workspace/konanfi9-web/docs/backend_audit_REEL.md:222:/workspace/tmp/backend_konanFI9/app/api/auth.py:99:    creds: HTTPAuthorizationCredentials | None = Depends(bearer),
/workspace/konanfi9-web/docs/backend_audit_REEL.md:223:/workspace/tmp/backend_konanFI9/app/api/auth.py:100:    db: Session = Depends(get_db),
/workspace/konanfi9-web/docs/backend_audit_REEL.md:224:/workspace/tmp/backend_konanFI9/app/api/auth.py:110:@router.get("/me")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:225:/workspace/tmp/backend_konanFI9/app/api/auth.py:111:def me(user: User = Depends(current_user)):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:226:/workspace/tmp/backend_konanFI9/app/api/auth_seed.py:11:@router.post("/seed-test-user")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:227:/workspace/tmp/backend_konanFI9/app/api/auth_seed.py:12:def seed_test_user(db: Session = Depends(get_db)):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:228:/workspace/tmp/backend_konanFI9/app/api/files.py:20:@router.post("/upload", summary="Uploader un fichier vers le serveur")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:229:/workspace/tmp/backend_konanFI9/app/api/files.py:21:async def upload_file(file: UploadFile = File(...), db: Session = Depends(get_db)):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:230:/workspace/tmp/backend_konanFI9/app/api/files.py:53:@router.get("/list", summary="Lister les fichiers enregistrés")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:231:/workspace/tmp/backend_konanFI9/app/api/files.py:54:def list_files(db: Session = Depends(get_db)):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:232:/workspace/tmp/backend_konanFI9/app/api/files.py:69:@router.delete("/{file_id}", summary="Supprimer un fichier")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:233:/workspace/tmp/backend_konanFI9/app/api/files.py:70:def delete_file(file_id: int, db: Session = Depends(get_db)):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:234:/workspace/tmp/backend_konanFI9/app/api/health.py:7:@router.get("/health")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:235:/workspace/tmp/backend_konanFI9/app/api/health.py:8:def health_check(db: Session = Depends(get_db)):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:236:/workspace/tmp/backend_konanFI9/app/api/laws.py:18:@router.get("/search")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:237:/workspace/tmp/backend_konanFI9/app/api/laws.py:27:@router.post("/reindex")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:238:/workspace/tmp/backend_konanFI9/app/api/laws.py:37:@router.get("/stats")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:239:/workspace/tmp/backend_konanFI9/app/api/laws.py:47:@router.get("/all")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:240:/workspace/tmp/backend_konanFI9/app/api/laws.py:54:@router.get("/{law_id}")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:241:/workspace/tmp/backend_konanFI9/app/api/lawsold.py:85:@router.get("/search_law")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:242:/workspace/tmp/backend_konanFI9/app/api/lawsold.py:93:@router.post("/index_laws")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:243:/workspace/tmp/backend_konanFI9/app/api/lawsold.py:107:@router.delete("/reset_laws")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:244:/workspace/tmp/backend_konanFI9/app/api/lawsold.py:124:@router.get("/stats_laws")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:245:/workspace/tmp/backend_konanFI9/app/api/lawsold.py:178:@router.get("/notifications")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:246:/workspace/tmp/backend_konanFI9/app/api/lawsold.py:193:@router.post("/notifications/mark_as_read")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:247:/workspace/tmp/backend_konanFI9/app/api/lawsold.py:217:@router.post("/load_laws_from_url")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:248:/workspace/tmp/backend_konanFI9/app/api/lawsold.py:283:@router.post("/laws/compare_version")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:249:/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:16:    dependencies=[Depends(verify_jwt)]
/workspace/konanfi9-web/docs/backend_audit_REEL.md:250:/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:23:@router.get("")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:251:/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:25:    db: Session = Depends(get_db),
/workspace/konanfi9-web/docs/backend_audit_REEL.md:252:/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:56:@router.post("")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:253:/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:57:async def create_conversation(request: Request, db: Session = Depends(get_db)):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:254:/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:82:@router.patch("/{conv_id}")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:255:/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:83:def update_conversation(conv_id: int, data: dict, db: Session = Depends(get_db)):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:256:/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:99:@router.delete("/{conv_id}")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:257:/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:100:def delete_conversation(conv_id: int, db: Session = Depends(get_db)):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:258:/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:112:@router.get("/{conv_id}/messages")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:259:/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:115:    db: Session = Depends(get_db),
/workspace/konanfi9-web/docs/backend_audit_REEL.md:260:/workspace/tmp/backend_konanFI9/app/api/search.py:6:@router.post("/upsert")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:261:/workspace/tmp/backend_konanFI9/app/api/search.py:15:@router.get("/")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:262:/workspace/tmp/backend_konanFI9/app/api.py:19:@router.post("/auth/register", response_model=UserOut)
/workspace/konanfi9-web/docs/backend_audit_REEL.md:263:/workspace/tmp/backend_konanFI9/app/api.py:20:def register(data: UserCreate, db: Session = Depends(get_db)):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:264:/workspace/tmp/backend_konanFI9/app/api.py:30:@router.post("/auth/login", response_model=Token)
/workspace/konanfi9-web/docs/backend_audit_REEL.md:265:/workspace/tmp/backend_konanFI9/app/api.py:31:def login(data: UserCreate, db: Session = Depends(get_db)):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:266:/workspace/tmp/backend_konanFI9/app/api.py:40:@router.post("/seed")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:267:/workspace/tmp/backend_konanFI9/app/api.py:41:def seed_laws(db: Session = Depends(get_db)):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:268:/workspace/tmp/backend_konanFI9/app/api.py:64:@router.post("/chat", response_model=ChatResponse)
/workspace/konanfi9-web/docs/backend_audit_REEL.md:269:/workspace/tmp/backend_konanFI9/app/api.py:89:@router.post("/pdf")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:270:/workspace/tmp/backend_konanFI9/app/core/security.py:52:def verify_jwt(credentials: HTTPAuthorizationCredentials = Depends(bearer_scheme)) -> Dict[str, Any]:
/workspace/konanfi9-web/docs/backend_audit_REEL.md:271:/workspace/tmp/backend_konanFI9/app/main.py:127:@app.get("/health")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:272:/workspace/tmp/backend_konanFI9/app/main.py:131:@app.get("/test_db")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:273:/workspace/tmp/backend_konanFI9/app/memory_vector.py:88:@router.get("/inspect")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:274:/workspace/tmp/backend_konanFI9/app/memory_vector.py:104:@router.get("/stats")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:275:/workspace/tmp/backend_konanFI9/app/memory_vector.py:121:@router.delete("/clear")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:276:/workspace/tmp/backend_konanFI9/app/memory_vector.py:130:@router.get("/ping")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:277:/workspace/tmp/backend_konanFI9/app/routers/auth_router.py:9:@router.post("/login")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:278:/workspace/tmp/backend_konanFI9/app/routers/auth_router.py:18:@router.get("/me")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:279:/workspace/tmp/backend_konanFI9/app/routers/auth_router.py:23:def get_current_user(token: str = Depends(lambda: None)):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:280:/workspace/tmp/backend_konanFI9/app/routers/chat.py:51:@router.post("/chat", response_model=ChatResponse)
/workspace/konanfi9-web/docs/backend_audit_REEL.md:281:/workspace/tmp/backend_konanFI9/app/routers/chat.py:52:async def chat_endpoint(request: ChatRequest, db: Session = Depends(get_db)):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:282:/workspace/tmp/backend_konanFI9/app/routers/chat.py:116:@router.get("/health")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:283:/workspace/tmp/backend_konanFI9/app/routers/files.py:9:router = APIRouter(prefix="/api/files", tags=["files"], dependencies=[Depends(verify_jwt)])
/workspace/konanfi9-web/docs/backend_audit_REEL.md:284:/workspace/tmp/backend_konanFI9/app/routers/files.py:11:@router.get("/{file_id}")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:285:/workspace/tmp/backend_konanFI9/app/routers/files.py:12:def get_uploaded_file(file_id: str, db: Session = Depends(get_db), user=Depends(verify_jwt)):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:286:/workspace/tmp/backend_konanFI9/app/routers/laws_router.py:7:@router.get("/search", summary="Recherche sémantique dans les lois")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:287:/workspace/tmp/backend_konanFI9/app/routers/memory_vector.py:21:@router.get("/stats")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:288:/workspace/tmp/backend_konanFI9/app/routers/stripe_router.py:11:router = APIRouter(dependencies=[Depends(verify_jwt)])
/workspace/konanfi9-web/docs/backend_audit_REEL.md:289:/workspace/tmp/backend_konanFI9/app/routers/stripe_router.py:24:@router.post("/create-checkout-session")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:290:/workspace/tmp/backend_konanFI9/app/routers/stripe_router.py:59:@router.post("/webhook")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:291:/workspace/tmp/backend_konanFI9/app/routers/stripe_router.py:71:@router.post("/verify-session")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:292:/workspace/tmp/backend_konanFI9/app/routers/user_router.py:10:@router.post("/register", response_model=UserResponse)
/workspace/konanfi9-web/docs/backend_audit_REEL.md:293:/workspace/tmp/backend_konanFI9/app/routers/user_router.py:11:def register(user: UserCreate, db: Session = Depends(get_db)):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:294:/workspace/tmp/backend_konanFI9/app/routers/user_router.py:22:@router.post("/login")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:295:/workspace/tmp/backend_konanFI9/app/routers/user_router.py:23:def login(data: UserLogin, db: Session = Depends(get_db)):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:296:/workspace/tmp/backend_konanFI9/app/routers/user_router.py:30:@router.get("/me", response_model=UserResponse)
/workspace/konanfi9-web/docs/backend_audit_REEL.md:297:/workspace/tmp/backend_konanFI9/app/routers/user_router.py:31:def me(db: Session = Depends(get_db)):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:298:/workspace/tmp/backend_konanFI9/app/routers/user_router.py:34:@router.get("/plans")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:301:/workspace/tmp/backend_konanFI9/app/main.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:304:/workspace/tmp/backend_konanFI9/app/agents/domains/administratif.py:2:class AdministratifAgent(BaseAgent):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:305:/workspace/tmp/backend_konanFI9/app/agents/domains/civil.py:2:class CivilAgent(BaseAgent):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:306:/workspace/tmp/backend_konanFI9/app/agents/domains/commercial.py:2:class CommercialAgent(BaseAgent):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:307:/workspace/tmp/backend_konanFI9/app/agents/domains/constitution.py:2:class ConstitutionAgent(BaseAgent):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:308:/workspace/tmp/backend_konanFI9/app/agents/domains/famille.py:2:class FamilleAgent(BaseAgent):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:309:/workspace/tmp/backend_konanFI9/app/agents/domains/fiscalite.py:2:class FiscaliteAgent(BaseAgent):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:310:/workspace/tmp/backend_konanFI9/app/agents/domains/immobilier.py:2:class ImmobilierAgent(BaseAgent):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:311:/workspace/tmp/backend_konanFI9/app/agents/domains/penal.py:2:class PenalAgent(BaseAgent):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:312:/workspace/tmp/backend_konanFI9/app/agents/domains/travail.py:2:class TravailAgent(BaseAgent):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:313:/workspace/tmp/backend_konanFI9/app/api/api.py:2:from app.services.search import semantic_search, upsert_documents
/workspace/konanfi9-web/docs/backend_audit_REEL.md:314:/workspace/tmp/backend_konanFI9/app/api/auth.py:10:from app.models.user import User
/workspace/konanfi9-web/docs/backend_audit_REEL.md:315:/workspace/tmp/backend_konanFI9/app/api/auth.py:12:from app.utils.auth_bypass import optional_user
/workspace/konanfi9-web/docs/backend_audit_REEL.md:316:/workspace/tmp/backend_konanFI9/app/api/auth.py:21:class UserCreate(BaseModel):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:317:/workspace/tmp/backend_konanFI9/app/api/auth.py:27:class Login(BaseModel):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:318:/workspace/tmp/backend_konanFI9/app/api/auth_seed.py:5:from app.models.user import User, PlanType
/workspace/konanfi9-web/docs/backend_audit_REEL.md:319:/workspace/tmp/backend_konanFI9/app/api/files.py:9:from app.models.file_upload import FileUpload
/workspace/konanfi9-web/docs/backend_audit_REEL.md:320:/workspace/tmp/backend_konanFI9/app/api/lawsold.py:15:from app.models.law_diff_log import LawDiffLog
/workspace/konanfi9-web/docs/backend_audit_REEL.md:321:/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:10:from app.models.conversation import Conversation
/workspace/konanfi9-web/docs/backend_audit_REEL.md:322:/workspace/tmp/backend_konanFI9/app/api/search.py:2:from app.services.search import semantic_search, upsert_documents
/workspace/konanfi9-web/docs/backend_audit_REEL.md:323:/workspace/tmp/backend_konanFI9/app/api.py:5:from .models import User, LawArticle
/workspace/konanfi9-web/docs/backend_audit_REEL.md:324:/workspace/tmp/backend_konanFI9/app/api.py:6:from .schemas import UserCreate, Token, ChatRequest, ChatResponse, PDFRequest, UserOut
/workspace/konanfi9-web/docs/backend_audit_REEL.md:325:/workspace/tmp/backend_konanFI9/app/api.py:8:from .services.search import semantic_search, upsert_documents
/workspace/konanfi9-web/docs/backend_audit_REEL.md:326:/workspace/tmp/backend_konanFI9/app/api.py:9:from .services.openai_client import chat_completion
/workspace/konanfi9-web/docs/backend_audit_REEL.md:327:/workspace/tmp/backend_konanFI9/app/api.py:10:from .services.pdf import make_simple_pdf
/workspace/konanfi9-web/docs/backend_audit_REEL.md:328:/workspace/tmp/backend_konanFI9/app/config.py:7:class Settings(BaseSettings):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:329:/workspace/tmp/backend_konanFI9/app/core/config.py:7:class Settings(BaseSettings):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:330:/workspace/tmp/backend_konanFI9/app/crud.py:2:from app.models import Conversation
/workspace/konanfi9-web/docs/backend_audit_REEL.md:331:/workspace/tmp/backend_konanFI9/app/main.py:25:from app.models import Conversation
/workspace/konanfi9-web/docs/backend_audit_REEL.md:332:/workspace/tmp/backend_konanFI9/app/main.py:26:from app.schemas import ChatRequest
/workspace/konanfi9-web/docs/backend_audit_REEL.md:333:/workspace/tmp/backend_konanFI9/app/memory.py:3:from app import models
/workspace/konanfi9-web/docs/backend_audit_REEL.md:334:/workspace/tmp/backend_konanFI9/app/memory.py:6:    conv = models.Conversation(session_id=session_id, role=role, message=message)
/workspace/konanfi9-web/docs/backend_audit_REEL.md:335:/workspace/tmp/backend_konanFI9/app/memory.py:14:        db.query(models.Conversation)
/workspace/konanfi9-web/docs/backend_audit_REEL.md:336:/workspace/tmp/backend_konanFI9/app/memory.py:15:        .filter(models.Conversation.session_id == session_id)
/workspace/konanfi9-web/docs/backend_audit_REEL.md:337:/workspace/tmp/backend_konanFI9/app/memory.py:16:        .order_by(models.Conversation.created_at.desc())
/workspace/konanfi9-web/docs/backend_audit_REEL.md:338:/workspace/tmp/backend_konanFI9/app/models/__init__.py:1:from app.models.conversation import Conversation
/workspace/konanfi9-web/docs/backend_audit_REEL.md:339:/workspace/tmp/backend_konanFI9/app/models/__init__.py:2:from app.models.user import User
/workspace/konanfi9-web/docs/backend_audit_REEL.md:340:/workspace/tmp/backend_konanFI9/app/models/__init__.py:3:from app.models.file_upload import FileUpload  # ✅ ajout ici
/workspace/konanfi9-web/docs/backend_audit_REEL.md:341:/workspace/tmp/backend_konanFI9/app/models/conversation.py:1:# app/models/conversation.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:342:/workspace/tmp/backend_konanFI9/app/models/conversation.py:8:class Conversation(Base):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:343:/workspace/tmp/backend_konanFI9/app/models/file_upload.py:4:class FileUpload(Base):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:344:/workspace/tmp/backend_konanFI9/app/models/law.py:5:class LawArticle(Base):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:345:/workspace/tmp/backend_konanFI9/app/models/law_article.py:4:class LawArticle(Base):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:346:/workspace/tmp/backend_konanFI9/app/models/law_diff_log.py:2:# app/models/law_diff_log.py — Historique des comparaisons de lois
/workspace/konanfi9-web/docs/backend_audit_REEL.md:347:/workspace/tmp/backend_konanFI9/app/models/law_diff_log.py:8:class LawDiffLog(Base):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:348:/workspace/tmp/backend_konanFI9/app/models/user.py:11:class User(Base):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:349:/workspace/tmp/backend_konanFI9/app/models.py:1:# app/models.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:350:/workspace/tmp/backend_konanFI9/app/models.py:6:class Conversation(Base):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:351:/workspace/tmp/backend_konanFI9/app/models.py:17:class LawArticle(Base):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:352:/workspace/tmp/backend_konanFI9/app/models.py:28:class RefLanguage(Base):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:353:/workspace/tmp/backend_konanFI9/app/models.py:37:class CurrentArticlesV(Base):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:354:/workspace/tmp/backend_konanFI9/app/routers/chat.py:8:from app.models import Conversation
/workspace/konanfi9-web/docs/backend_audit_REEL.md:355:/workspace/tmp/backend_konanFI9/app/routers/chat.py:9:from app.schemas import ChatRequest, ChatResponse
/workspace/konanfi9-web/docs/backend_audit_REEL.md:356:/workspace/tmp/backend_konanFI9/app/routers/chat.py:10:from app.utils.lang_detector import detect_language
/workspace/konanfi9-web/docs/backend_audit_REEL.md:357:/workspace/tmp/backend_konanFI9/app/routers/chat.py:14:from app.services.llm_service import call_llm_api
/workspace/konanfi9-web/docs/backend_audit_REEL.md:358:/workspace/tmp/backend_konanFI9/app/routers/files.py:4:from app.models import FileUpload  # table que tu as utilisée pour stocker les fichiers
/workspace/konanfi9-web/docs/backend_audit_REEL.md:359:/workspace/tmp/backend_konanFI9/app/routers/user_router.py:4:from app.models.user import User, PlanType
/workspace/konanfi9-web/docs/backend_audit_REEL.md:360:/workspace/tmp/backend_konanFI9/app/routers/user_router.py:5:from app.schemas.user_schemas import UserCreate, UserLogin, UserResponse
/workspace/konanfi9-web/docs/backend_audit_REEL.md:361:/workspace/tmp/backend_konanFI9/app/schemas/__init__.py:2:# app/schemas/__init__.py — Modèles de base pour l'API Konan
/workspace/konanfi9-web/docs/backend_audit_REEL.md:362:/workspace/tmp/backend_konanFI9/app/schemas/__init__.py:6:class ChatRequest(BaseModel):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:363:/workspace/tmp/backend_konanFI9/app/schemas/__init__.py:10:class ChatResponse(BaseModel):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:364:/workspace/tmp/backend_konanFI9/app/schemas/diff_schema.py:3:class LawDiffItem(BaseModel):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:365:/workspace/tmp/backend_konanFI9/app/schemas/law_schema.py:3:class LawArticleIn(BaseModel):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:366:/workspace/tmp/backend_konanFI9/app/schemas/user.py:2:# app/schemas/user.py — Schémas Pydantic (Konan API)
/workspace/konanfi9-web/docs/backend_audit_REEL.md:367:/workspace/tmp/backend_konanFI9/app/schemas/user.py:8:class UserCreate(BaseModel):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:368:/workspace/tmp/backend_konanFI9/app/schemas/user.py:13:class UserOut(BaseModel):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:369:/workspace/tmp/backend_konanFI9/app/schemas/user.py:22:class Login(BaseModel):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:370:/workspace/tmp/backend_konanFI9/app/schemas/user.py:26:class Token(BaseModel):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:371:/workspace/tmp/backend_konanFI9/app/schemas/user_schemas.py:9:class UserCreate(BaseModel):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:372:/workspace/tmp/backend_konanFI9/app/schemas/user_schemas.py:14:class UserLogin(BaseModel):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:373:/workspace/tmp/backend_konanFI9/app/schemas/user_schemas.py:18:class UserResponse(BaseModel):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:374:/workspace/tmp/backend_konanFI9/app/schemas.py:2:# app/schemas.py — Phase 3 stable finale
/workspace/konanfi9-web/docs/backend_audit_REEL.md:375:/workspace/tmp/backend_konanFI9/app/schemas.py:7:class ChatRequest(BaseModel):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:376:/workspace/tmp/backend_konanFI9/app/schemas.py:11:class ChatResponse(BaseModel):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:377:/workspace/tmp/backend_konanFI9/app/services/llm_service.py:1:# app/services/llm_service.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:378:/workspace/tmp/backend_konanFI9/app/services/search.py:1:# app/services/search.py
/workspace/konanfi9-web/docs/backend_audit_REEL.md:379:/workspace/tmp/backend_konanFI9/app/services/search.py:4:from chromadb.utils import embedding_functions
/workspace/konanfi9-web/docs/backend_audit_REEL.md:380:/workspace/tmp/backend_konanFI9/app/session.py:2:from app.models.conversation import Conversation
/workspace/konanfi9-web/docs/backend_audit_REEL.md:381:/workspace/tmp/backend_konanFI9/app/utils/auth_bypass.py:7:from app.models.user import User, PlanType
/workspace/konanfi9-web/docs/backend_audit_REEL.md:382:/workspace/tmp/backend_konanFI9/app/vector/index_laws.py:2:from app.utils.parser import iter_jsonl
/workspace/konanfi9-web/docs/backend_audit_REEL.md:383:/workspace/tmp/backend_konanFI9/app/vector/index_laws.py:3:from app.utils.cleaner import clean_record
/workspace/konanfi9-web/docs/backend_audit_REEL.md:384:/workspace/tmp/backend_konanFI9/app/vector/update_scheduler.py:5:from app.utils.jort_scraper import fetch_to_jsonl
/workspace/konanfi9-web/docs/backend_audit_REEL.md:387:/workspace/tmp/backend_konanFI9/app/api/auth.py:4:from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
/workspace/konanfi9-web/docs/backend_audit_REEL.md:388:/workspace/tmp/backend_konanFI9/app/api/auth.py:11:from app.core.security import hash_password, verify_password, create_access_token, decode_token
/workspace/konanfi9-web/docs/backend_audit_REEL.md:389:/workspace/tmp/backend_konanFI9/app/api/auth.py:15:bearer = HTTPBearer(auto_error=False)
/workspace/konanfi9-web/docs/backend_audit_REEL.md:390:/workspace/tmp/backend_konanFI9/app/api/auth.py:23:    password: str
/workspace/konanfi9-web/docs/backend_audit_REEL.md:391:/workspace/tmp/backend_konanFI9/app/api/auth.py:29:    password: str
/workspace/konanfi9-web/docs/backend_audit_REEL.md:392:/workspace/tmp/backend_konanFI9/app/api/auth.py:43:        hashed_password=hash_password(p.password),
/workspace/konanfi9-web/docs/backend_audit_REEL.md:393:/workspace/tmp/backend_konanFI9/app/api/auth.py:48:    db.refresh(u)
/workspace/konanfi9-web/docs/backend_audit_REEL.md:394:/workspace/tmp/backend_konanFI9/app/api/auth.py:60:    if not u or not verify_password(p.password, u.hashed_password):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:395:/workspace/tmp/backend_konanFI9/app/api/auth.py:63:    token = create_access_token(subject=str(u.id))
/workspace/konanfi9-web/docs/backend_audit_REEL.md:396:/workspace/tmp/backend_konanFI9/app/api/auth.py:65:        "access_token": token,
/workspace/konanfi9-web/docs/backend_audit_REEL.md:397:/workspace/tmp/backend_konanFI9/app/api/auth.py:66:        "token_type": "bearer",
/workspace/konanfi9-web/docs/backend_audit_REEL.md:398:/workspace/tmp/backend_konanFI9/app/api/auth.py:74:def _user_from_token(creds: HTTPAuthorizationCredentials | None, db: Session) -> User:
/workspace/konanfi9-web/docs/backend_audit_REEL.md:399:/workspace/tmp/backend_konanFI9/app/api/auth.py:78:    data = decode_token(creds.credentials)
/workspace/konanfi9-web/docs/backend_audit_REEL.md:400:/workspace/tmp/backend_konanFI9/app/api/auth.py:95:    return _user_from_token(creds, db)
/workspace/konanfi9-web/docs/backend_audit_REEL.md:401:/workspace/tmp/backend_konanFI9/app/api/auth.py:104:    return _user_from_token(creds, db)
/workspace/konanfi9-web/docs/backend_audit_REEL.md:402:/workspace/tmp/backend_konanFI9/app/api/auth_seed.py:6:from app.core.security import hash_password
/workspace/konanfi9-web/docs/backend_audit_REEL.md:403:/workspace/tmp/backend_konanFI9/app/api/auth_seed.py:19:    password = "KING"
/workspace/konanfi9-web/docs/backend_audit_REEL.md:404:/workspace/tmp/backend_konanFI9/app/api/auth_seed.py:31:        hashed_password=hash_password(password),
/workspace/konanfi9-web/docs/backend_audit_REEL.md:405:/workspace/tmp/backend_konanFI9/app/api/auth_seed.py:38:    db.refresh(new_user)
/workspace/konanfi9-web/docs/backend_audit_REEL.md:406:/workspace/tmp/backend_konanFI9/app/api/files.py:37:        db.refresh(new_file)
/workspace/konanfi9-web/docs/backend_audit_REEL.md:407:/workspace/tmp/backend_konanFI9/app/api/lawsold.py:41:SMTP_PASS = os.getenv("SMTP_PASS", "password-placeholder")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:408:/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:70:    db.refresh(conv)
/workspace/konanfi9-web/docs/backend_audit_REEL.md:409:/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:92:    db.refresh(conv)
/workspace/konanfi9-web/docs/backend_audit_REEL.md:410:/workspace/tmp/backend_konanFI9/app/api.py:7:from .core.security import hash_password, verify_password, create_access_token
/workspace/konanfi9-web/docs/backend_audit_REEL.md:411:/workspace/tmp/backend_konanFI9/app/api.py:23:    user = User(email=data.email, hashed_password=hash_password(data.password))
/workspace/konanfi9-web/docs/backend_audit_REEL.md:412:/workspace/tmp/backend_konanFI9/app/api.py:26:    db.refresh(user)
/workspace/konanfi9-web/docs/backend_audit_REEL.md:413:/workspace/tmp/backend_konanFI9/app/api.py:33:    if not user or not verify_password(data.password, user.hashed_password):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:414:/workspace/tmp/backend_konanFI9/app/api.py:34:        raise HTTPException(status_code=400, detail="Incorrect email or password")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:415:/workspace/tmp/backend_konanFI9/app/api.py:35:    token = create_access_token({"sub": user.email})
/workspace/konanfi9-web/docs/backend_audit_REEL.md:416:/workspace/tmp/backend_konanFI9/app/api.py:36:    return {"access_token": token, "token_type": "bearer"}
/workspace/konanfi9-web/docs/backend_audit_REEL.md:417:/workspace/tmp/backend_konanFI9/app/config.py:14:    JWT_SECRET: str
/workspace/konanfi9-web/docs/backend_audit_REEL.md:418:/workspace/tmp/backend_konanFI9/app/config.py:15:    JWT_ALGORITHM: str = "HS256"
/workspace/konanfi9-web/docs/backend_audit_REEL.md:419:/workspace/tmp/backend_konanFI9/app/core/config.py:13:    JWT_SECRET: str = os.getenv("JWT_SECRET", "default_jwt_secret")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:420:/workspace/tmp/backend_konanFI9/app/core/config.py:14:    JWT_ALGORITHM: str = "HS256"
/workspace/konanfi9-web/docs/backend_audit_REEL.md:421:/workspace/tmp/backend_konanFI9/app/core/security.py:6:from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
/workspace/konanfi9-web/docs/backend_audit_REEL.md:422:/workspace/tmp/backend_konanFI9/app/core/security.py:7:from jose import JWTError, jwt
/workspace/konanfi9-web/docs/backend_audit_REEL.md:423:/workspace/tmp/backend_konanFI9/app/core/security.py:11:bearer_scheme = HTTPBearer(auto_error=True)
/workspace/konanfi9-web/docs/backend_audit_REEL.md:424:/workspace/tmp/backend_konanFI9/app/core/security.py:13:SECRET_KEY = os.getenv("JWT_SECRET", "change-me")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:425:/workspace/tmp/backend_konanFI9/app/core/security.py:14:ALGORITHM = os.getenv("JWT_ALGORITHM", "HS256")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:426:/workspace/tmp/backend_konanFI9/app/core/security.py:15:ACCESS_TOKEN_EXPIRE_MINUTES = int(os.getenv("JWT_ACCESS_TOKEN_EXPIRE_MINUTES", "1440"))
/workspace/konanfi9-web/docs/backend_audit_REEL.md:427:/workspace/tmp/backend_konanFI9/app/core/security.py:18:def hash_password(password: str) -> str:
/workspace/konanfi9-web/docs/backend_audit_REEL.md:428:/workspace/tmp/backend_konanFI9/app/core/security.py:19:    return pwd_context.hash(password)
/workspace/konanfi9-web/docs/backend_audit_REEL.md:429:/workspace/tmp/backend_konanFI9/app/core/security.py:22:def verify_password(plain_password: str, hashed_password: str) -> bool:
/workspace/konanfi9-web/docs/backend_audit_REEL.md:430:/workspace/tmp/backend_konanFI9/app/core/security.py:24:        return pwd_context.verify(plain_password, hashed_password)
/workspace/konanfi9-web/docs/backend_audit_REEL.md:431:/workspace/tmp/backend_konanFI9/app/core/security.py:29:def create_access_token(
/workspace/konanfi9-web/docs/backend_audit_REEL.md:432:/workspace/tmp/backend_konanFI9/app/core/security.py:48:def decode_token(token: str) -> Dict[str, Any]:
/workspace/konanfi9-web/docs/backend_audit_REEL.md:433:/workspace/tmp/backend_konanFI9/app/core/security.py:49:    return jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
/workspace/konanfi9-web/docs/backend_audit_REEL.md:434:/workspace/tmp/backend_konanFI9/app/core/security.py:53:    token = credentials.credentials
/workspace/konanfi9-web/docs/backend_audit_REEL.md:435:/workspace/tmp/backend_konanFI9/app/core/security.py:55:        data = decode_token(token)
/workspace/konanfi9-web/docs/backend_audit_REEL.md:436:/workspace/tmp/backend_konanFI9/app/core/security.py:58:            raise JWTError("Subject must be a string.")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:437:/workspace/tmp/backend_konanFI9/app/core/security.py:60:    except JWTError as exc:
/workspace/konanfi9-web/docs/backend_audit_REEL.md:438:/workspace/tmp/backend_konanFI9/app/core/security.py:63:            detail="Invalid or expired token",
/workspace/konanfi9-web/docs/backend_audit_REEL.md:439:/workspace/tmp/backend_konanFI9/app/crud.py:13:    db.refresh(conv)
/workspace/konanfi9-web/docs/backend_audit_REEL.md:440:/workspace/tmp/backend_konanFI9/app/memory.py:9:    db.refresh(conv)
/workspace/konanfi9-web/docs/backend_audit_REEL.md:441:/workspace/tmp/backend_konanFI9/app/models/user.py:17:    hashed_password = Column(String(255), nullable=False)
/workspace/konanfi9-web/docs/backend_audit_REEL.md:442:/workspace/tmp/backend_konanFI9/app/routers/auth_router.py:12:    password = data.get("password")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:443:/workspace/tmp/backend_konanFI9/app/routers/auth_router.py:13:    if email and password:
/workspace/konanfi9-web/docs/backend_audit_REEL.md:444:/workspace/tmp/backend_konanFI9/app/routers/auth_router.py:17:# /auth/me → renvoie 403 si pas de token
/workspace/konanfi9-web/docs/backend_audit_REEL.md:445:/workspace/tmp/backend_konanFI9/app/routers/auth_router.py:23:def get_current_user(token: str = Depends(lambda: None)):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:446:/workspace/tmp/backend_konanFI9/app/routers/user_router.py:6:from app.core.security import hash_password, verify_password, create_access_token
/workspace/konanfi9-web/docs/backend_audit_REEL.md:447:/workspace/tmp/backend_konanFI9/app/routers/user_router.py:15:    hashed = hash_password(user.password)
/workspace/konanfi9-web/docs/backend_audit_REEL.md:448:/workspace/tmp/backend_konanFI9/app/routers/user_router.py:16:    db_user = User(email=user.email, hashed_password=hashed, full_name=user.full_name)
/workspace/konanfi9-web/docs/backend_audit_REEL.md:449:/workspace/tmp/backend_konanFI9/app/routers/user_router.py:19:    db.refresh(db_user)
/workspace/konanfi9-web/docs/backend_audit_REEL.md:450:/workspace/tmp/backend_konanFI9/app/routers/user_router.py:25:    if not user or not verify_password(data.password, user.hashed_password):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:451:/workspace/tmp/backend_konanFI9/app/routers/user_router.py:27:    token = create_access_token({"sub": str(user.id)})
/workspace/konanfi9-web/docs/backend_audit_REEL.md:452:/workspace/tmp/backend_konanFI9/app/routers/user_router.py:28:    return {"access_token": token, "token_type": "bearer", "plan": user.plan.value}
/workspace/konanfi9-web/docs/backend_audit_REEL.md:453:/workspace/tmp/backend_konanFI9/app/schemas/user.py:10:    password: str
/workspace/konanfi9-web/docs/backend_audit_REEL.md:454:/workspace/tmp/backend_konanFI9/app/schemas/user.py:24:    password: str
/workspace/konanfi9-web/docs/backend_audit_REEL.md:455:/workspace/tmp/backend_konanFI9/app/schemas/user.py:27:    access_token: str
/workspace/konanfi9-web/docs/backend_audit_REEL.md:456:/workspace/tmp/backend_konanFI9/app/schemas/user.py:28:    token_type: str = "bearer"
/workspace/konanfi9-web/docs/backend_audit_REEL.md:457:/workspace/tmp/backend_konanFI9/app/schemas/user_schemas.py:11:    password: str
/workspace/konanfi9-web/docs/backend_audit_REEL.md:458:/workspace/tmp/backend_konanFI9/app/schemas/user_schemas.py:16:    password: str
/workspace/konanfi9-web/docs/backend_audit_REEL.md:459:/workspace/tmp/backend_konanFI9/app/services/llm_service.py:30:        "Authorization": f"Bearer {API_KEY}",
/workspace/konanfi9-web/docs/backend_audit_REEL.md:460:/workspace/tmp/backend_konanFI9/app/services/llm_service.py:37:        "max_tokens": MAX_TOKENS,
/workspace/konanfi9-web/docs/backend_audit_REEL.md:461:/workspace/tmp/backend_konanFI9/app/services/openai_client.py:9:    headers = {"Authorization": f"Bearer {settings.OPENAI_API_KEY}", "Content-Type": "application/json"}
/workspace/konanfi9-web/docs/backend_audit_REEL.md:462:/workspace/tmp/backend_konanFI9/app/session.py:17:    db.refresh(new_message)
/workspace/konanfi9-web/docs/backend_audit_REEL.md:463:/workspace/tmp/backend_konanFI9/app/utils/auth_bypass.py:15:    hashed_password="",
/workspace/konanfi9-web/docs/backend_audit_REEL.md:464:/workspace/tmp/backend_konanFI9/app/vector/embeddings.py:20:    headers = {"Authorization": f"Bearer {OPENAI_API_KEY}", "Content-Type":"application/json"}
/workspace/konanfi9-web/docs/backend_audit_REEL.md:467:/workspace/tmp/backend_konanFI9/app/api/auth.py:6:from sqlalchemy.orm import Session
/workspace/konanfi9-web/docs/backend_audit_REEL.md:468:/workspace/tmp/backend_konanFI9/app/api/auth.py:9:from app.database import get_db
/workspace/konanfi9-web/docs/backend_audit_REEL.md:469:/workspace/tmp/backend_konanFI9/app/api/auth.py:36:def register_user(p: UserCreate, db: Session = Depends(get_db)):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:470:/workspace/tmp/backend_konanFI9/app/api/auth.py:57:def login_user(p: Login, db: Session = Depends(get_db)):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:471:/workspace/tmp/backend_konanFI9/app/api/auth.py:74:def _user_from_token(creds: HTTPAuthorizationCredentials | None, db: Session) -> User:
/workspace/konanfi9-web/docs/backend_audit_REEL.md:472:/workspace/tmp/backend_konanFI9/app/api/auth.py:94:def _current_user(creds: HTTPAuthorizationCredentials = Depends(bearer), db: Session = Depends(get_db)) -> User:
/workspace/konanfi9-web/docs/backend_audit_REEL.md:473:/workspace/tmp/backend_konanFI9/app/api/auth.py:100:    db: Session = Depends(get_db),
/workspace/konanfi9-web/docs/backend_audit_REEL.md:474:/workspace/tmp/backend_konanFI9/app/api/auth_seed.py:2:from sqlalchemy.orm import Session
/workspace/konanfi9-web/docs/backend_audit_REEL.md:475:/workspace/tmp/backend_konanFI9/app/api/auth_seed.py:4:from app.database import get_db
/workspace/konanfi9-web/docs/backend_audit_REEL.md:476:/workspace/tmp/backend_konanFI9/app/api/auth_seed.py:12:def seed_test_user(db: Session = Depends(get_db)):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:477:/workspace/tmp/backend_konanFI9/app/api/files.py:7:from sqlalchemy.orm import Session
/workspace/konanfi9-web/docs/backend_audit_REEL.md:478:/workspace/tmp/backend_konanFI9/app/api/files.py:8:from app.db.session import get_db
/workspace/konanfi9-web/docs/backend_audit_REEL.md:479:/workspace/tmp/backend_konanFI9/app/api/files.py:21:async def upload_file(file: UploadFile = File(...), db: Session = Depends(get_db)):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:480:/workspace/tmp/backend_konanFI9/app/api/files.py:54:def list_files(db: Session = Depends(get_db)):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:481:/workspace/tmp/backend_konanFI9/app/api/files.py:70:def delete_file(file_id: int, db: Session = Depends(get_db)):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:482:/workspace/tmp/backend_konanFI9/app/api/health.py:2:from sqlalchemy.orm import Session
/workspace/konanfi9-web/docs/backend_audit_REEL.md:483:/workspace/tmp/backend_konanFI9/app/api/health.py:3:from app.database import get_db
/workspace/konanfi9-web/docs/backend_audit_REEL.md:484:/workspace/tmp/backend_konanFI9/app/api/health.py:8:def health_check(db: Session = Depends(get_db)):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:485:/workspace/tmp/backend_konanFI9/app/api/laws.py:6:from app.database import get_db
/workspace/konanfi9-web/docs/backend_audit_REEL.md:486:/workspace/tmp/backend_konanFI9/app/api/laws.py:49:    db = next(get_db())
/workspace/konanfi9-web/docs/backend_audit_REEL.md:487:/workspace/tmp/backend_konanFI9/app/api/laws.py:56:    db = next(get_db())
/workspace/konanfi9-web/docs/backend_audit_REEL.md:488:/workspace/tmp/backend_konanFI9/app/api/lawsold.py:14:from sqlalchemy.orm import Session
/workspace/konanfi9-web/docs/backend_audit_REEL.md:489:/workspace/tmp/backend_konanFI9/app/api/lawsold.py:16:from app.database import SessionLocal
/workspace/konanfi9-web/docs/backend_audit_REEL.md:490:/workspace/tmp/backend_konanFI9/app/api/lawsold.py:336:            db: Session = SessionLocal()
/workspace/konanfi9-web/docs/backend_audit_REEL.md:491:/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:6:from sqlalchemy.orm import Session
/workspace/konanfi9-web/docs/backend_audit_REEL.md:492:/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:9:from app.database import get_db
/workspace/konanfi9-web/docs/backend_audit_REEL.md:493:/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:25:    db: Session = Depends(get_db),
/workspace/konanfi9-web/docs/backend_audit_REEL.md:494:/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:57:async def create_conversation(request: Request, db: Session = Depends(get_db)):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:495:/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:83:def update_conversation(conv_id: int, data: dict, db: Session = Depends(get_db)):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:496:/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:100:def delete_conversation(conv_id: int, db: Session = Depends(get_db)):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:497:/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:115:    db: Session = Depends(get_db),
/workspace/konanfi9-web/docs/backend_audit_REEL.md:498:/workspace/tmp/backend_konanFI9/app/api.py:3:from sqlalchemy.orm import Session
/workspace/konanfi9-web/docs/backend_audit_REEL.md:499:/workspace/tmp/backend_konanFI9/app/api.py:4:from .db import get_db, Base, engine
/workspace/konanfi9-web/docs/backend_audit_REEL.md:500:/workspace/tmp/backend_konanFI9/app/api.py:15:Base.metadata.create_all(bind=engine)
/workspace/konanfi9-web/docs/backend_audit_REEL.md:501:/workspace/tmp/backend_konanFI9/app/api.py:20:def register(data: UserCreate, db: Session = Depends(get_db)):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:502:/workspace/tmp/backend_konanFI9/app/api.py:31:def login(data: UserCreate, db: Session = Depends(get_db)):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:503:/workspace/tmp/backend_konanFI9/app/api.py:41:def seed_laws(db: Session = Depends(get_db)):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:504:/workspace/tmp/backend_konanFI9/app/audit_db.py:3:from sqlalchemy import create_engine, inspect, text
/workspace/konanfi9-web/docs/backend_audit_REEL.md:505:/workspace/tmp/backend_konanFI9/app/audit_db.py:24:    engine = create_engine(DATABASE_URL)
/workspace/konanfi9-web/docs/backend_audit_REEL.md:506:/workspace/tmp/backend_konanFI9/app/audit_db.py:25:    with engine.connect() as conn:
/workspace/konanfi9-web/docs/backend_audit_REEL.md:507:/workspace/tmp/backend_konanFI9/app/audit_db.py:35:    inspector = inspect(engine)
/workspace/konanfi9-web/docs/backend_audit_REEL.md:508:/workspace/tmp/backend_konanFI9/app/config.py:2:from pydantic_settings import BaseSettings, SettingsConfigDict
/workspace/konanfi9-web/docs/backend_audit_REEL.md:509:/workspace/tmp/backend_konanFI9/app/config.py:4:from .core.config import Settings, settings
/workspace/konanfi9-web/docs/backend_audit_REEL.md:510:/workspace/tmp/backend_konanFI9/app/config.py:7:class Settings(BaseSettings):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:511:/workspace/tmp/backend_konanFI9/app/config.py:41:    model_config = SettingsConfigDict(
/workspace/konanfi9-web/docs/backend_audit_REEL.md:512:/workspace/tmp/backend_konanFI9/app/config.py:77:settings = Settings()
/workspace/konanfi9-web/docs/backend_audit_REEL.md:513:/workspace/tmp/backend_konanFI9/app/core/chroma_client.py:3:from chromadb.config import Settings
/workspace/konanfi9-web/docs/backend_audit_REEL.md:514:/workspace/tmp/backend_konanFI9/app/core/config.py:2:from pydantic_settings import BaseSettings, SettingsConfigDict
/workspace/konanfi9-web/docs/backend_audit_REEL.md:515:/workspace/tmp/backend_konanFI9/app/core/config.py:7:class Settings(BaseSettings):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:516:/workspace/tmp/backend_konanFI9/app/core/config.py:34:    model_config = SettingsConfigDict(
/workspace/konanfi9-web/docs/backend_audit_REEL.md:517:/workspace/tmp/backend_konanFI9/app/core/config.py:58:settings = Settings()
/workspace/konanfi9-web/docs/backend_audit_REEL.md:518:/workspace/tmp/backend_konanFI9/app/crud.py:1:from sqlalchemy.orm import Session
/workspace/konanfi9-web/docs/backend_audit_REEL.md:519:/workspace/tmp/backend_konanFI9/app/crud.py:4:def create_conversation(db: Session, session_id: str, role: str, message_user: str = None, message_konan: str = None):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:520:/workspace/tmp/backend_konanFI9/app/crud.py:16:def get_conversations(db: Session, session_id: str):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:521:/workspace/tmp/backend_konanFI9/app/database.py:7:from sqlalchemy import create_engine
/workspace/konanfi9-web/docs/backend_audit_REEL.md:522:/workspace/tmp/backend_konanFI9/app/database.py:8:from sqlalchemy.orm import sessionmaker, declarative_base
/workspace/konanfi9-web/docs/backend_audit_REEL.md:523:/workspace/tmp/backend_konanFI9/app/database.py:41:engine = create_engine(DATABASE_URL, pool_pre_ping=True, echo=False)
/workspace/konanfi9-web/docs/backend_audit_REEL.md:524:/workspace/tmp/backend_konanFI9/app/database.py:42:SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
/workspace/konanfi9-web/docs/backend_audit_REEL.md:525:/workspace/tmp/backend_konanFI9/app/database.py:43:Base = declarative_base()
/workspace/konanfi9-web/docs/backend_audit_REEL.md:526:/workspace/tmp/backend_konanFI9/app/database.py:46:def get_db():
/workspace/konanfi9-web/docs/backend_audit_REEL.md:527:/workspace/tmp/backend_konanFI9/app/database.py:47:    db = SessionLocal()
/workspace/konanfi9-web/docs/backend_audit_REEL.md:528:/workspace/tmp/backend_konanFI9/app/db/__init__.py:1:from sqlalchemy import create_engine
/workspace/konanfi9-web/docs/backend_audit_REEL.md:529:/workspace/tmp/backend_konanFI9/app/db/__init__.py:2:from sqlalchemy.orm import declarative_base
/workspace/konanfi9-web/docs/backend_audit_REEL.md:530:/workspace/tmp/backend_konanFI9/app/db/__init__.py:3:from sqlalchemy.orm import sessionmaker
/workspace/konanfi9-web/docs/backend_audit_REEL.md:531:/workspace/tmp/backend_konanFI9/app/db/__init__.py:6:# --- Configuration de la base PostgreSQL ---
/workspace/konanfi9-web/docs/backend_audit_REEL.md:532:/workspace/tmp/backend_konanFI9/app/db/__init__.py:16:engine = create_engine(DATABASE_URL)
/workspace/konanfi9-web/docs/backend_audit_REEL.md:533:/workspace/tmp/backend_konanFI9/app/db/__init__.py:17:SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
/workspace/konanfi9-web/docs/backend_audit_REEL.md:534:/workspace/tmp/backend_konanFI9/app/db/__init__.py:20:Base = declarative_base()
/workspace/konanfi9-web/docs/backend_audit_REEL.md:535:/workspace/tmp/backend_konanFI9/app/db/__init__.py:23:def get_db():
/workspace/konanfi9-web/docs/backend_audit_REEL.md:536:/workspace/tmp/backend_konanFI9/app/db/__init__.py:24:    db = SessionLocal()
/workspace/konanfi9-web/docs/backend_audit_REEL.md:537:/workspace/tmp/backend_konanFI9/app/db/base.py:4:from sqlalchemy.orm import declarative_base
/workspace/konanfi9-web/docs/backend_audit_REEL.md:538:/workspace/tmp/backend_konanFI9/app/db/base.py:6:Base = declarative_base()
/workspace/konanfi9-web/docs/backend_audit_REEL.md:539:/workspace/tmp/backend_konanFI9/app/db/session.py:3:from sqlalchemy import create_engine
/workspace/konanfi9-web/docs/backend_audit_REEL.md:540:/workspace/tmp/backend_konanFI9/app/db/session.py:4:from sqlalchemy.orm import declarative_base, sessionmaker
/workspace/konanfi9-web/docs/backend_audit_REEL.md:541:/workspace/tmp/backend_konanFI9/app/db/session.py:8:engine = create_engine(settings.db_url, pool_pre_ping=True, connect_args=_connect_args)
/workspace/konanfi9-web/docs/backend_audit_REEL.md:542:/workspace/tmp/backend_konanFI9/app/db/session.py:9:SessionLocal = sessionmaker(bind=engine, autocommit=False, autoflush=False)
/workspace/konanfi9-web/docs/backend_audit_REEL.md:543:/workspace/tmp/backend_konanFI9/app/db/session.py:10:Base = declarative_base()
/workspace/konanfi9-web/docs/backend_audit_REEL.md:544:/workspace/tmp/backend_konanFI9/app/db/session.py:12:def get_db() -> Generator:
/workspace/konanfi9-web/docs/backend_audit_REEL.md:545:/workspace/tmp/backend_konanFI9/app/db/session.py:13:    db = SessionLocal()
/workspace/konanfi9-web/docs/backend_audit_REEL.md:546:/workspace/tmp/backend_konanFI9/app/main.py:19:from sqlalchemy.orm import Session
/workspace/konanfi9-web/docs/backend_audit_REEL.md:547:/workspace/tmp/backend_konanFI9/app/main.py:24:from app.database import get_db, engine
/workspace/konanfi9-web/docs/backend_audit_REEL.md:548:/workspace/tmp/backend_konanFI9/app/main.py:54:logging.basicConfig(filename=LOG_FILE, level=logging.INFO, format="%(message)s", encoding="utf-8")
/workspace/konanfi9-web/docs/backend_audit_REEL.md:549:/workspace/tmp/backend_konanFI9/app/main.py:133:    with engine.connect() as conn:
/workspace/konanfi9-web/docs/backend_audit_REEL.md:550:/workspace/tmp/backend_konanFI9/app/memory.py:2:from sqlalchemy.orm import Session
/workspace/konanfi9-web/docs/backend_audit_REEL.md:551:/workspace/tmp/backend_konanFI9/app/memory.py:5:def add_message(db: Session, session_id: str, role: str, message: str):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:552:/workspace/tmp/backend_konanFI9/app/memory.py:12:def get_history(db: Session, session_id: str, limit: int = 5):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:553:/workspace/tmp/backend_konanFI9/app/routers/chat.py:6:from sqlalchemy.orm import Session
/workspace/konanfi9-web/docs/backend_audit_REEL.md:554:/workspace/tmp/backend_konanFI9/app/routers/chat.py:7:from app.database import get_db
/workspace/konanfi9-web/docs/backend_audit_REEL.md:555:/workspace/tmp/backend_konanFI9/app/routers/chat.py:27:def get_conversation_history(db: Session, session_id: str, limit: int = 10):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:556:/workspace/tmp/backend_konanFI9/app/routers/chat.py:52:async def chat_endpoint(request: ChatRequest, db: Session = Depends(get_db)):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:557:/workspace/tmp/backend_konanFI9/app/routers/files.py:3:from sqlalchemy.orm import Session
/workspace/konanfi9-web/docs/backend_audit_REEL.md:558:/workspace/tmp/backend_konanFI9/app/routers/files.py:5:from app.database import get_db
/workspace/konanfi9-web/docs/backend_audit_REEL.md:559:/workspace/tmp/backend_konanFI9/app/routers/files.py:12:def get_uploaded_file(file_id: str, db: Session = Depends(get_db), user=Depends(verify_jwt)):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:560:/workspace/tmp/backend_konanFI9/app/routers/memory_vector.py:5:from chromadb.config import Settings
/workspace/konanfi9-web/docs/backend_audit_REEL.md:561:/workspace/tmp/backend_konanFI9/app/routers/memory_vector.py:15:    Settings(
/workspace/konanfi9-web/docs/backend_audit_REEL.md:562:/workspace/tmp/backend_konanFI9/app/routers/stripe_router.py:45:        session = stripe.checkout.Session.create(
/workspace/konanfi9-web/docs/backend_audit_REEL.md:563:/workspace/tmp/backend_konanFI9/app/routers/stripe_router.py:97:        session = stripe.checkout.Session.retrieve(session_id)
/workspace/konanfi9-web/docs/backend_audit_REEL.md:564:/workspace/tmp/backend_konanFI9/app/routers/user_router.py:2:from sqlalchemy.orm import Session
/workspace/konanfi9-web/docs/backend_audit_REEL.md:565:/workspace/tmp/backend_konanFI9/app/routers/user_router.py:3:from app.database import get_db
/workspace/konanfi9-web/docs/backend_audit_REEL.md:566:/workspace/tmp/backend_konanFI9/app/routers/user_router.py:11:def register(user: UserCreate, db: Session = Depends(get_db)):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:567:/workspace/tmp/backend_konanFI9/app/routers/user_router.py:23:def login(data: UserLogin, db: Session = Depends(get_db)):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:568:/workspace/tmp/backend_konanFI9/app/routers/user_router.py:31:def me(db: Session = Depends(get_db)):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:569:/workspace/tmp/backend_konanFI9/app/schemas/law_schema.py:11:    class Config:
/workspace/konanfi9-web/docs/backend_audit_REEL.md:570:/workspace/tmp/backend_konanFI9/app/schemas/user.py:19:    class Config:
/workspace/konanfi9-web/docs/backend_audit_REEL.md:571:/workspace/tmp/backend_konanFI9/app/schemas/user_schemas.py:23:    class Config:
/workspace/konanfi9-web/docs/backend_audit_REEL.md:572:/workspace/tmp/backend_konanFI9/app/session.py:1:from sqlalchemy.orm import Session
/workspace/konanfi9-web/docs/backend_audit_REEL.md:573:/workspace/tmp/backend_konanFI9/app/session.py:5:def add_message(db: Session, session_id: str, sender: str, message: str):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:574:/workspace/tmp/backend_konanFI9/app/session.py:22:def get_history(db: Session, session_id: str):
/workspace/konanfi9-web/docs/backend_audit_REEL.md:575:/workspace/tmp/backend_konanFI9/app/vector/chroma_manager.py:7:from chromadb.config import Settings
/workspace/konanfi9-web/docs/backend_audit_REEL.md:576:/workspace/tmp/backend_konanFI9/app/vector/chroma_manager.py:20:        Settings(
/workspace/konanfi9-web/docs/backend_audit_REEL.md:577:/workspace/tmp/backend_konanFI9/app/vector/chroma_manager.py:139:from chromadb.config import Settings
/workspace/konanfi9-web/docs/backend_audit_REEL.md:578:/workspace/tmp/backend_konanFI9/app/vector/chroma_manager.py:152:        Settings(
/workspace/konanfi9-web/docs/backend_audit_REEL.md:586:- Analyse effectuée EXCLUSIVEMENT sur /workspace/tmp/backend_konanFI9/app.
/workspace/konanfi9-web/docs/front_audit_tmp/env_process_usage.txt:1:/workspace/konanfi9-web/README.md:48:- Base URL: `process.env.NEXT_PUBLIC_API_BASE_URL`
/workspace/konanfi9-web/docs/front_audit_tmp/env_process_usage.txt:2:/workspace/konanfi9-web/docs/front_audit_tmp/env_usage.txt:4:/workspace/konanfi9-web/README.md:48:- Base URL: `process.env.NEXT_PUBLIC_API_BASE_URL`
/workspace/konanfi9-web/docs/front_audit_tmp/env_process_usage.txt:3:/workspace/konanfi9-web/docs/front_audit_tmp/env_usage.txt:5:/workspace/konanfi9-web/src/app/health/page.tsx:19:  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || '';
/workspace/konanfi9-web/docs/front_audit_tmp/env_process_usage.txt:4:/workspace/konanfi9-web/docs/front_audit_tmp/env_usage.txt:6:/workspace/konanfi9-web/src/app/tester/page.tsx:16:  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || '';
/workspace/konanfi9-web/docs/front_audit_tmp/env_process_usage.txt:5:/workspace/konanfi9-web/docs/front_audit_tmp/env_usage.txt:7:/workspace/konanfi9-web/src/lib/api.ts:3: * - Base URL: process.env.NEXT_PUBLIC_API_BASE_URL
/workspace/konanfi9-web/docs/front_audit_tmp/env_process_usage.txt:6:/workspace/konanfi9-web/docs/front_audit_tmp/env_usage.txt:8:/workspace/konanfi9-web/src/lib/api.ts:42:  const baseUrl = options.baseUrl ?? process.env.NEXT_PUBLIC_API_BASE_URL ?? '';
/workspace/konanfi9-web/docs/front_audit_tmp/env_process_usage.txt:7:/workspace/konanfi9-web/src/app/health/page.tsx:19:  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || '';
/workspace/konanfi9-web/docs/front_audit_tmp/env_process_usage.txt:8:/workspace/konanfi9-web/src/app/tester/page.tsx:16:  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || '';
/workspace/konanfi9-web/docs/front_audit_tmp/env_process_usage.txt:9:/workspace/konanfi9-web/src/lib/api.ts:3: * - Base URL: process.env.NEXT_PUBLIC_API_BASE_URL
/workspace/konanfi9-web/docs/front_audit_tmp/env_process_usage.txt:10:/workspace/konanfi9-web/src/lib/api.ts:42:  const baseUrl = options.baseUrl ?? process.env.NEXT_PUBLIC_API_BASE_URL ?? '';
/workspace/konanfi9-web/docs/front_audit_tmp/env_usage.txt:1:/workspace/konanfi9-web/.env.example:3:NEXT_PUBLIC_API_BASE_URL=
/workspace/konanfi9-web/docs/front_audit_tmp/env_usage.txt:2:/workspace/konanfi9-web/.env.local:2:# NEXT_PUBLIC_API_BASE_URL=http://localhost:3001
/workspace/konanfi9-web/docs/front_audit_tmp/env_usage.txt:3:/workspace/konanfi9-web/README.md:40:NEXT_PUBLIC_API_BASE_URL=http://localhost:3001
/workspace/konanfi9-web/docs/front_audit_tmp/env_usage.txt:4:/workspace/konanfi9-web/README.md:48:- Base URL: `process.env.NEXT_PUBLIC_API_BASE_URL`
/workspace/konanfi9-web/docs/front_audit_tmp/env_usage.txt:5:/workspace/konanfi9-web/src/app/health/page.tsx:19:  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || '';
/workspace/konanfi9-web/docs/front_audit_tmp/env_usage.txt:6:/workspace/konanfi9-web/src/app/tester/page.tsx:16:  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || '';
/workspace/konanfi9-web/docs/front_audit_tmp/env_usage.txt:7:/workspace/konanfi9-web/src/lib/api.ts:3: * - Base URL: process.env.NEXT_PUBLIC_API_BASE_URL
/workspace/konanfi9-web/docs/front_audit_tmp/env_usage.txt:8:/workspace/konanfi9-web/src/lib/api.ts:42:  const baseUrl = options.baseUrl ?? process.env.NEXT_PUBLIC_API_BASE_URL ?? '';

Autres occurrences potentiellement problématiques (file://, localhost):
/workspace/konanfi9-web/.env.example:2:# Base URL of the backend API, e.g. http://localhost:3001 or https://api.example.com
/workspace/konanfi9-web/.env.local:2:# NEXT_PUBLIC_API_BASE_URL=http://localhost:3001
/workspace/konanfi9-web/README.md:40:NEXT_PUBLIC_API_BASE_URL=http://localhost:3001
/workspace/konanfi9-web/docs/front_audit_tmp/abs_workspace.txt:1131:/workspace/konanfi9-web/docs/front_audit_tmp/env_usage.txt:2:/workspace/konanfi9-web/.env.local:2:# NEXT_PUBLIC_API_BASE_URL=http://localhost:3001
/workspace/konanfi9-web/docs/front_audit_tmp/abs_workspace.txt:1132:/workspace/konanfi9-web/docs/front_audit_tmp/env_usage.txt:3:/workspace/konanfi9-web/README.md:40:NEXT_PUBLIC_API_BASE_URL=http://localhost:3001
/workspace/konanfi9-web/docs/front_audit_tmp/env_usage.txt:2:/workspace/konanfi9-web/.env.local:2:# NEXT_PUBLIC_API_BASE_URL=http://localhost:3001
/workspace/konanfi9-web/docs/front_audit_tmp/env_usage.txt:3:/workspace/konanfi9-web/README.md:40:NEXT_PUBLIC_API_BASE_URL=http://localhost:3001

4. Conclusion:
Status: Ajustements requis.
