Audit KONAN FastAPI (Réel)

Source dossier analysé: /workspace/tmp/backend_konanFI9/app
Date: 2025-11-13T11:48:44Z

1. Arborescence complète (dossiers)
/workspace/tmp/backend_konanFI9/app
/workspace/tmp/backend_konanFI9/app/agents
/workspace/tmp/backend_konanFI9/app/agents/domains
/workspace/tmp/backend_konanFI9/app/api
/workspace/tmp/backend_konanFI9/app/api/routes
/workspace/tmp/backend_konanFI9/app/assets
/workspace/tmp/backend_konanFI9/app/core
/workspace/tmp/backend_konanFI9/app/data
/workspace/tmp/backend_konanFI9/app/data/corpus
/workspace/tmp/backend_konanFI9/app/db
/workspace/tmp/backend_konanFI9/app/models
/workspace/tmp/backend_konanFI9/app/routers
/workspace/tmp/backend_konanFI9/app/schemas
/workspace/tmp/backend_konanFI9/app/services
/workspace/tmp/backend_konanFI9/app/utils
/workspace/tmp/backend_konanFI9/app/vector

2. Fichiers Python (.py)
/workspace/tmp/backend_konanFI9/app/__init__.py
/workspace/tmp/backend_konanFI9/app/agents/base.py
/workspace/tmp/backend_konanFI9/app/agents/domains/administratif.py
/workspace/tmp/backend_konanFI9/app/agents/domains/civil.py
/workspace/tmp/backend_konanFI9/app/agents/domains/commercial.py
/workspace/tmp/backend_konanFI9/app/agents/domains/constitution.py
/workspace/tmp/backend_konanFI9/app/agents/domains/famille.py
/workspace/tmp/backend_konanFI9/app/agents/domains/fiscalite.py
/workspace/tmp/backend_konanFI9/app/agents/domains/immobilier.py
/workspace/tmp/backend_konanFI9/app/agents/domains/penal.py
/workspace/tmp/backend_konanFI9/app/agents/domains/travail.py
/workspace/tmp/backend_konanFI9/app/agents/registry.py
/workspace/tmp/backend_konanFI9/app/api/__init__.py
/workspace/tmp/backend_konanFI9/app/api/admin_update.py
/workspace/tmp/backend_konanFI9/app/api/api.py
/workspace/tmp/backend_konanFI9/app/api/auth.py
/workspace/tmp/backend_konanFI9/app/api/auth_seed.py
/workspace/tmp/backend_konanFI9/app/api/files.py
/workspace/tmp/backend_konanFI9/app/api/health.py
/workspace/tmp/backend_konanFI9/app/api/laws.py
/workspace/tmp/backend_konanFI9/app/api/laws_diff.py
/workspace/tmp/backend_konanFI9/app/api/laws_ws.py
/workspace/tmp/backend_konanFI9/app/api/lawsold.py
/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py
/workspace/tmp/backend_konanFI9/app/api/search.py
/workspace/tmp/backend_konanFI9/app/api.py
/workspace/tmp/backend_konanFI9/app/audit_db.py
/workspace/tmp/backend_konanFI9/app/config.py
/workspace/tmp/backend_konanFI9/app/core/__init__.py
/workspace/tmp/backend_konanFI9/app/core/chroma_client.py
/workspace/tmp/backend_konanFI9/app/core/config.py
/workspace/tmp/backend_konanFI9/app/core/security.py
/workspace/tmp/backend_konanFI9/app/core/system_prompt.py
/workspace/tmp/backend_konanFI9/app/crud.py
/workspace/tmp/backend_konanFI9/app/database.py
/workspace/tmp/backend_konanFI9/app/db/__init__.py
/workspace/tmp/backend_konanFI9/app/db/base.py
/workspace/tmp/backend_konanFI9/app/db/session.py
/workspace/tmp/backend_konanFI9/app/main.py
/workspace/tmp/backend_konanFI9/app/memory.py
/workspace/tmp/backend_konanFI9/app/memory_vector.py
/workspace/tmp/backend_konanFI9/app/models/__init__.py
/workspace/tmp/backend_konanFI9/app/models/conversation.py
/workspace/tmp/backend_konanFI9/app/models/file_upload.py
/workspace/tmp/backend_konanFI9/app/models/law.py
/workspace/tmp/backend_konanFI9/app/models/law_article.py
/workspace/tmp/backend_konanFI9/app/models/law_diff_log.py
/workspace/tmp/backend_konanFI9/app/models/user.py
/workspace/tmp/backend_konanFI9/app/models.py
/workspace/tmp/backend_konanFI9/app/routers/__init__.py
/workspace/tmp/backend_konanFI9/app/routers/auth_router.py
/workspace/tmp/backend_konanFI9/app/routers/chat.py
/workspace/tmp/backend_konanFI9/app/routers/files.py
/workspace/tmp/backend_konanFI9/app/routers/laws_router.py
/workspace/tmp/backend_konanFI9/app/routers/memory_vector.py
/workspace/tmp/backend_konanFI9/app/routers/stripe_router.py
/workspace/tmp/backend_konanFI9/app/routers/user_router.py
/workspace/tmp/backend_konanFI9/app/schemas/__init__.py
/workspace/tmp/backend_konanFI9/app/schemas/diff_schema.py
/workspace/tmp/backend_konanFI9/app/schemas/law_schema.py
/workspace/tmp/backend_konanFI9/app/schemas/user.py
/workspace/tmp/backend_konanFI9/app/schemas/user_schemas.py
/workspace/tmp/backend_konanFI9/app/schemas.py
/workspace/tmp/backend_konanFI9/app/services/llm_service.py
/workspace/tmp/backend_konanFI9/app/services/openai_client.py
/workspace/tmp/backend_konanFI9/app/services/pdf.py
/workspace/tmp/backend_konanFI9/app/services/search.py
/workspace/tmp/backend_konanFI9/app/session.py
/workspace/tmp/backend_konanFI9/app/utils/__init__.py
/workspace/tmp/backend_konanFI9/app/utils/auth_bypass.py
/workspace/tmp/backend_konanFI9/app/utils/cleaner.py
/workspace/tmp/backend_konanFI9/app/utils/jort_scraper.py
/workspace/tmp/backend_konanFI9/app/utils/lang_detector.py
/workspace/tmp/backend_konanFI9/app/utils/parser.py
/workspace/tmp/backend_konanFI9/app/vector/__init__.py
/workspace/tmp/backend_konanFI9/app/vector/chroma_manager.py
/workspace/tmp/backend_konanFI9/app/vector/embeddings.py
/workspace/tmp/backend_konanFI9/app/vector/index_laws.py
/workspace/tmp/backend_konanFI9/app/vector/update_scheduler.py

3. Routers FastAPI détectés et endpoints (fichier:ligne:code)
/workspace/tmp/backend_konanFI9/app/api/admin_update.py:1:from fastapi import APIRouter, Header, HTTPException
/workspace/tmp/backend_konanFI9/app/api/admin_update.py:6:router = APIRouter(prefix="/api/admin", tags=["admin"])
/workspace/tmp/backend_konanFI9/app/api/admin_update.py:14:@router.post("/reindex")
/workspace/tmp/backend_konanFI9/app/api/admin_update.py:20:@router.post("/update")
/workspace/tmp/backend_konanFI9/app/api/api.py:1:from fastapi import APIRouter
/workspace/tmp/backend_konanFI9/app/api/api.py:4:router = APIRouter(prefix="/search", tags=["search"])
/workspace/tmp/backend_konanFI9/app/api/api.py:6:@router.post("/upsert")
/workspace/tmp/backend_konanFI9/app/api/api.py:15:@router.get("/")
/workspace/tmp/backend_konanFI9/app/api/auth.py:3:from fastapi import APIRouter, Depends, HTTPException, status
/workspace/tmp/backend_konanFI9/app/api/auth.py:14:router = APIRouter(tags=["Auth"])
/workspace/tmp/backend_konanFI9/app/api/auth.py:35:@router.post("/register")
/workspace/tmp/backend_konanFI9/app/api/auth.py:56:@router.post("/login")
/workspace/tmp/backend_konanFI9/app/api/auth.py:110:@router.get("/me")
/workspace/tmp/backend_konanFI9/app/api/auth_seed.py:1:from fastapi import APIRouter, Depends
/workspace/tmp/backend_konanFI9/app/api/auth_seed.py:8:router = APIRouter(tags=["Auth Seed"])
/workspace/tmp/backend_konanFI9/app/api/auth_seed.py:11:@router.post("/seed-test-user")
/workspace/tmp/backend_konanFI9/app/api/files.py:6:from fastapi import APIRouter, UploadFile, File, HTTPException, Depends
/workspace/tmp/backend_konanFI9/app/api/files.py:11:router = APIRouter(tags=["Files"])
/workspace/tmp/backend_konanFI9/app/api/files.py:20:@router.post("/upload", summary="Uploader un fichier vers le serveur")
/workspace/tmp/backend_konanFI9/app/api/files.py:53:@router.get("/list", summary="Lister les fichiers enregistrés")
/workspace/tmp/backend_konanFI9/app/api/files.py:69:@router.delete("/{file_id}", summary="Supprimer un fichier")
/workspace/tmp/backend_konanFI9/app/api/health.py:1:from fastapi import APIRouter, Depends
/workspace/tmp/backend_konanFI9/app/api/health.py:5:router = APIRouter()
/workspace/tmp/backend_konanFI9/app/api/health.py:7:@router.get("/health")
/workspace/tmp/backend_konanFI9/app/api/laws.py:4:from fastapi import APIRouter, HTTPException, Query, Header
/workspace/tmp/backend_konanFI9/app/api/laws.py:10:router = APIRouter(prefix="/api/laws", tags=["Lois tunisiennes"])
/workspace/tmp/backend_konanFI9/app/api/laws.py:18:@router.get("/search")
/workspace/tmp/backend_konanFI9/app/api/laws.py:27:@router.post("/reindex")
/workspace/tmp/backend_konanFI9/app/api/laws.py:37:@router.get("/stats")
/workspace/tmp/backend_konanFI9/app/api/laws.py:47:@router.get("/all")
/workspace/tmp/backend_konanFI9/app/api/laws.py:54:@router.get("/{law_id}")
/workspace/tmp/backend_konanFI9/app/api/laws_ws.py:4:from fastapi import APIRouter, WebSocket, WebSocketDisconnect
/workspace/tmp/backend_konanFI9/app/api/laws_ws.py:7:router = APIRouter(prefix="/ws", tags=["WebSocket Notifications"])
/workspace/tmp/backend_konanFI9/app/api/lawsold.py:12:from fastapi import APIRouter, Query, HTTPException, Header
/workspace/tmp/backend_konanFI9/app/api/lawsold.py:19:router = APIRouter(prefix="/api", tags=["Lois tunisiennes"])
/workspace/tmp/backend_konanFI9/app/api/lawsold.py:85:@router.get("/search_law")
/workspace/tmp/backend_konanFI9/app/api/lawsold.py:93:@router.post("/index_laws")
/workspace/tmp/backend_konanFI9/app/api/lawsold.py:107:@router.delete("/reset_laws")
/workspace/tmp/backend_konanFI9/app/api/lawsold.py:124:@router.get("/stats_laws")
/workspace/tmp/backend_konanFI9/app/api/lawsold.py:178:@router.get("/notifications")
/workspace/tmp/backend_konanFI9/app/api/lawsold.py:193:@router.post("/notifications/mark_as_read")
/workspace/tmp/backend_konanFI9/app/api/lawsold.py:217:@router.post("/load_laws_from_url")
/workspace/tmp/backend_konanFI9/app/api/lawsold.py:283:@router.post("/laws/compare_version")
/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:5:from fastapi import APIRouter, Depends, HTTPException, Query, Request
/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:13:router = APIRouter(
/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:23:@router.get("")
/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:56:@router.post("")
/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:82:@router.patch("/{conv_id}")
/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:99:@router.delete("/{conv_id}")
/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:112:@router.get("/{conv_id}/messages")
/workspace/tmp/backend_konanFI9/app/api/search.py:1:from fastapi import APIRouter
/workspace/tmp/backend_konanFI9/app/api/search.py:4:router = APIRouter(prefix="/search", tags=["search"])
/workspace/tmp/backend_konanFI9/app/api/search.py:6:@router.post("/upsert")
/workspace/tmp/backend_konanFI9/app/api/search.py:15:@router.get("/")
/workspace/tmp/backend_konanFI9/app/api.py:1:from fastapi import APIRouter, Depends, HTTPException
/workspace/tmp/backend_konanFI9/app/api.py:14:router = APIRouter()
/workspace/tmp/backend_konanFI9/app/api.py:19:@router.post("/auth/register", response_model=UserOut)
/workspace/tmp/backend_konanFI9/app/api.py:30:@router.post("/auth/login", response_model=Token)
/workspace/tmp/backend_konanFI9/app/api.py:40:@router.post("/seed")
/workspace/tmp/backend_konanFI9/app/api.py:64:@router.post("/chat", response_model=ChatResponse)
/workspace/tmp/backend_konanFI9/app/api.py:89:@router.post("/pdf")
/workspace/tmp/backend_konanFI9/app/main.py:115:app.include_router(auth_router, prefix="/api/auth", tags=["Auth"])
/workspace/tmp/backend_konanFI9/app/main.py:116:app.include_router(auth_seed.router, prefix="/api/auth", tags=["Auth"])
/workspace/tmp/backend_konanFI9/app/main.py:117:app.include_router(memory_vector_router, prefix="/api/memory", tags=["Memory"])
/workspace/tmp/backend_konanFI9/app/main.py:118:app.include_router(chat_router, prefix="/api", tags=["Chat"])
/workspace/tmp/backend_konanFI9/app/main.py:119:app.include_router(laws.router, prefix="/api/laws", tags=["Laws"])
/workspace/tmp/backend_konanFI9/app/main.py:120:app.include_router(files.router, prefix="/api/files", tags=["Files"])
/workspace/tmp/backend_konanFI9/app/main.py:121:app.include_router(conversations.router, prefix="/api/conversations", tags=["Conversations"])
/workspace/tmp/backend_konanFI9/app/main.py:122:app.include_router(stripe_router.router, prefix="/api/stripe", tags=["Stripe"])
/workspace/tmp/backend_konanFI9/app/main.py:127:@app.get("/health")
/workspace/tmp/backend_konanFI9/app/main.py:131:@app.get("/test_db")
/workspace/tmp/backend_konanFI9/app/memory_vector.py:7:from fastapi import APIRouter, HTTPException
/workspace/tmp/backend_konanFI9/app/memory_vector.py:86:router = APIRouter(prefix="/api/memory", tags=["Memory Vectorielle"])
/workspace/tmp/backend_konanFI9/app/memory_vector.py:88:@router.get("/inspect")
/workspace/tmp/backend_konanFI9/app/memory_vector.py:104:@router.get("/stats")
/workspace/tmp/backend_konanFI9/app/memory_vector.py:121:@router.delete("/clear")
/workspace/tmp/backend_konanFI9/app/memory_vector.py:130:@router.get("/ping")
/workspace/tmp/backend_konanFI9/app/routers/auth_router.py:4:from fastapi import APIRouter, HTTPException, status, Depends
/workspace/tmp/backend_konanFI9/app/routers/auth_router.py:6:router = APIRouter(prefix="/auth", tags=["Auth (mock)"])
/workspace/tmp/backend_konanFI9/app/routers/auth_router.py:9:@router.post("/login")
/workspace/tmp/backend_konanFI9/app/routers/auth_router.py:18:@router.get("/me")
/workspace/tmp/backend_konanFI9/app/routers/chat.py:5:from fastapi import APIRouter, Depends, HTTPException
/workspace/tmp/backend_konanFI9/app/routers/chat.py:21:router = APIRouter(prefix="/api", tags=["chat"])
/workspace/tmp/backend_konanFI9/app/routers/chat.py:51:@router.post("/chat", response_model=ChatResponse)
/workspace/tmp/backend_konanFI9/app/routers/chat.py:116:@router.get("/health")
/workspace/tmp/backend_konanFI9/app/routers/files.py:1:from fastapi import APIRouter, Depends, HTTPException
/workspace/tmp/backend_konanFI9/app/routers/files.py:9:router = APIRouter(prefix="/api/files", tags=["files"], dependencies=[Depends(verify_jwt)])
/workspace/tmp/backend_konanFI9/app/routers/files.py:11:@router.get("/{file_id}")
/workspace/tmp/backend_konanFI9/app/routers/laws_router.py:2:from fastapi import APIRouter, Query
/workspace/tmp/backend_konanFI9/app/routers/laws_router.py:5:router = APIRouter(prefix="/api/laws", tags=["Laws"])
/workspace/tmp/backend_konanFI9/app/routers/laws_router.py:7:@router.get("/search", summary="Recherche sémantique dans les lois")
/workspace/tmp/backend_konanFI9/app/routers/memory_vector.py:3:from fastapi import APIRouter
/workspace/tmp/backend_konanFI9/app/routers/memory_vector.py:7:router = APIRouter(prefix="/memory", tags=["Vector Memory"])
/workspace/tmp/backend_konanFI9/app/routers/memory_vector.py:21:@router.get("/stats")
/workspace/tmp/backend_konanFI9/app/routers/stripe_router.py:1:from fastapi import APIRouter, HTTPException, Request, Depends
/workspace/tmp/backend_konanFI9/app/routers/stripe_router.py:11:router = APIRouter(dependencies=[Depends(verify_jwt)])
/workspace/tmp/backend_konanFI9/app/routers/stripe_router.py:24:@router.post("/create-checkout-session")
/workspace/tmp/backend_konanFI9/app/routers/stripe_router.py:59:@router.post("/webhook")
/workspace/tmp/backend_konanFI9/app/routers/stripe_router.py:71:@router.post("/verify-session")
/workspace/tmp/backend_konanFI9/app/routers/user_router.py:1:from fastapi import APIRouter, Depends, HTTPException, status
/workspace/tmp/backend_konanFI9/app/routers/user_router.py:8:router = APIRouter(prefix="/api/auth", tags=["auth"])
/workspace/tmp/backend_konanFI9/app/routers/user_router.py:10:@router.post("/register", response_model=UserResponse)
/workspace/tmp/backend_konanFI9/app/routers/user_router.py:22:@router.post("/login")
/workspace/tmp/backend_konanFI9/app/routers/user_router.py:30:@router.get("/me", response_model=UserResponse)
/workspace/tmp/backend_konanFI9/app/routers/user_router.py:34:@router.get("/plans")

3.b Payloads (indices: response_model, Body, Depends)
/workspace/tmp/backend_konanFI9/app/api/admin_update.py:14:@router.post("/reindex")
/workspace/tmp/backend_konanFI9/app/api/admin_update.py:20:@router.post("/update")
/workspace/tmp/backend_konanFI9/app/api/api.py:6:@router.post("/upsert")
/workspace/tmp/backend_konanFI9/app/api/api.py:15:@router.get("/")
/workspace/tmp/backend_konanFI9/app/api/auth.py:35:@router.post("/register")
/workspace/tmp/backend_konanFI9/app/api/auth.py:36:def register_user(p: UserCreate, db: Session = Depends(get_db)):
/workspace/tmp/backend_konanFI9/app/api/auth.py:56:@router.post("/login")
/workspace/tmp/backend_konanFI9/app/api/auth.py:57:def login_user(p: Login, db: Session = Depends(get_db)):
/workspace/tmp/backend_konanFI9/app/api/auth.py:94:def _current_user(creds: HTTPAuthorizationCredentials = Depends(bearer), db: Session = Depends(get_db)) -> User:
/workspace/tmp/backend_konanFI9/app/api/auth.py:99:    creds: HTTPAuthorizationCredentials | None = Depends(bearer),
/workspace/tmp/backend_konanFI9/app/api/auth.py:100:    db: Session = Depends(get_db),
/workspace/tmp/backend_konanFI9/app/api/auth.py:110:@router.get("/me")
/workspace/tmp/backend_konanFI9/app/api/auth.py:111:def me(user: User = Depends(current_user)):
/workspace/tmp/backend_konanFI9/app/api/auth_seed.py:11:@router.post("/seed-test-user")
/workspace/tmp/backend_konanFI9/app/api/auth_seed.py:12:def seed_test_user(db: Session = Depends(get_db)):
/workspace/tmp/backend_konanFI9/app/api/files.py:20:@router.post("/upload", summary="Uploader un fichier vers le serveur")
/workspace/tmp/backend_konanFI9/app/api/files.py:21:async def upload_file(file: UploadFile = File(...), db: Session = Depends(get_db)):
/workspace/tmp/backend_konanFI9/app/api/files.py:53:@router.get("/list", summary="Lister les fichiers enregistrés")
/workspace/tmp/backend_konanFI9/app/api/files.py:54:def list_files(db: Session = Depends(get_db)):
/workspace/tmp/backend_konanFI9/app/api/files.py:69:@router.delete("/{file_id}", summary="Supprimer un fichier")
/workspace/tmp/backend_konanFI9/app/api/files.py:70:def delete_file(file_id: int, db: Session = Depends(get_db)):
/workspace/tmp/backend_konanFI9/app/api/health.py:7:@router.get("/health")
/workspace/tmp/backend_konanFI9/app/api/health.py:8:def health_check(db: Session = Depends(get_db)):
/workspace/tmp/backend_konanFI9/app/api/laws.py:18:@router.get("/search")
/workspace/tmp/backend_konanFI9/app/api/laws.py:27:@router.post("/reindex")
/workspace/tmp/backend_konanFI9/app/api/laws.py:37:@router.get("/stats")
/workspace/tmp/backend_konanFI9/app/api/laws.py:47:@router.get("/all")
/workspace/tmp/backend_konanFI9/app/api/laws.py:54:@router.get("/{law_id}")
/workspace/tmp/backend_konanFI9/app/api/lawsold.py:85:@router.get("/search_law")
/workspace/tmp/backend_konanFI9/app/api/lawsold.py:93:@router.post("/index_laws")
/workspace/tmp/backend_konanFI9/app/api/lawsold.py:107:@router.delete("/reset_laws")
/workspace/tmp/backend_konanFI9/app/api/lawsold.py:124:@router.get("/stats_laws")
/workspace/tmp/backend_konanFI9/app/api/lawsold.py:178:@router.get("/notifications")
/workspace/tmp/backend_konanFI9/app/api/lawsold.py:193:@router.post("/notifications/mark_as_read")
/workspace/tmp/backend_konanFI9/app/api/lawsold.py:217:@router.post("/load_laws_from_url")
/workspace/tmp/backend_konanFI9/app/api/lawsold.py:283:@router.post("/laws/compare_version")
/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:16:    dependencies=[Depends(verify_jwt)]
/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:23:@router.get("")
/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:25:    db: Session = Depends(get_db),
/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:56:@router.post("")
/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:57:async def create_conversation(request: Request, db: Session = Depends(get_db)):
/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:82:@router.patch("/{conv_id}")
/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:83:def update_conversation(conv_id: int, data: dict, db: Session = Depends(get_db)):
/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:99:@router.delete("/{conv_id}")
/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:100:def delete_conversation(conv_id: int, db: Session = Depends(get_db)):
/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:112:@router.get("/{conv_id}/messages")
/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:115:    db: Session = Depends(get_db),
/workspace/tmp/backend_konanFI9/app/api/search.py:6:@router.post("/upsert")
/workspace/tmp/backend_konanFI9/app/api/search.py:15:@router.get("/")
/workspace/tmp/backend_konanFI9/app/api.py:19:@router.post("/auth/register", response_model=UserOut)
/workspace/tmp/backend_konanFI9/app/api.py:20:def register(data: UserCreate, db: Session = Depends(get_db)):
/workspace/tmp/backend_konanFI9/app/api.py:30:@router.post("/auth/login", response_model=Token)
/workspace/tmp/backend_konanFI9/app/api.py:31:def login(data: UserCreate, db: Session = Depends(get_db)):
/workspace/tmp/backend_konanFI9/app/api.py:40:@router.post("/seed")
/workspace/tmp/backend_konanFI9/app/api.py:41:def seed_laws(db: Session = Depends(get_db)):
/workspace/tmp/backend_konanFI9/app/api.py:64:@router.post("/chat", response_model=ChatResponse)
/workspace/tmp/backend_konanFI9/app/api.py:89:@router.post("/pdf")
/workspace/tmp/backend_konanFI9/app/core/security.py:52:def verify_jwt(credentials: HTTPAuthorizationCredentials = Depends(bearer_scheme)) -> Dict[str, Any]:
/workspace/tmp/backend_konanFI9/app/main.py:127:@app.get("/health")
/workspace/tmp/backend_konanFI9/app/main.py:131:@app.get("/test_db")
/workspace/tmp/backend_konanFI9/app/memory_vector.py:88:@router.get("/inspect")
/workspace/tmp/backend_konanFI9/app/memory_vector.py:104:@router.get("/stats")
/workspace/tmp/backend_konanFI9/app/memory_vector.py:121:@router.delete("/clear")
/workspace/tmp/backend_konanFI9/app/memory_vector.py:130:@router.get("/ping")
/workspace/tmp/backend_konanFI9/app/routers/auth_router.py:9:@router.post("/login")
/workspace/tmp/backend_konanFI9/app/routers/auth_router.py:18:@router.get("/me")
/workspace/tmp/backend_konanFI9/app/routers/auth_router.py:23:def get_current_user(token: str = Depends(lambda: None)):
/workspace/tmp/backend_konanFI9/app/routers/chat.py:51:@router.post("/chat", response_model=ChatResponse)
/workspace/tmp/backend_konanFI9/app/routers/chat.py:52:async def chat_endpoint(request: ChatRequest, db: Session = Depends(get_db)):
/workspace/tmp/backend_konanFI9/app/routers/chat.py:116:@router.get("/health")
/workspace/tmp/backend_konanFI9/app/routers/files.py:9:router = APIRouter(prefix="/api/files", tags=["files"], dependencies=[Depends(verify_jwt)])
/workspace/tmp/backend_konanFI9/app/routers/files.py:11:@router.get("/{file_id}")
/workspace/tmp/backend_konanFI9/app/routers/files.py:12:def get_uploaded_file(file_id: str, db: Session = Depends(get_db), user=Depends(verify_jwt)):
/workspace/tmp/backend_konanFI9/app/routers/laws_router.py:7:@router.get("/search", summary="Recherche sémantique dans les lois")
/workspace/tmp/backend_konanFI9/app/routers/memory_vector.py:21:@router.get("/stats")
/workspace/tmp/backend_konanFI9/app/routers/stripe_router.py:11:router = APIRouter(dependencies=[Depends(verify_jwt)])
/workspace/tmp/backend_konanFI9/app/routers/stripe_router.py:24:@router.post("/create-checkout-session")
/workspace/tmp/backend_konanFI9/app/routers/stripe_router.py:59:@router.post("/webhook")
/workspace/tmp/backend_konanFI9/app/routers/stripe_router.py:71:@router.post("/verify-session")
/workspace/tmp/backend_konanFI9/app/routers/user_router.py:10:@router.post("/register", response_model=UserResponse)
/workspace/tmp/backend_konanFI9/app/routers/user_router.py:11:def register(user: UserCreate, db: Session = Depends(get_db)):
/workspace/tmp/backend_konanFI9/app/routers/user_router.py:22:@router.post("/login")
/workspace/tmp/backend_konanFI9/app/routers/user_router.py:23:def login(data: UserLogin, db: Session = Depends(get_db)):
/workspace/tmp/backend_konanFI9/app/routers/user_router.py:30:@router.get("/me", response_model=UserResponse)
/workspace/tmp/backend_konanFI9/app/routers/user_router.py:31:def me(db: Session = Depends(get_db)):
/workspace/tmp/backend_konanFI9/app/routers/user_router.py:34:@router.get("/plans")

4. Fichier main.py (chemin exact)
/workspace/tmp/backend_konanFI9/app/main.py

5. Services, models, schemas, utils (indices)
/workspace/tmp/backend_konanFI9/app/agents/domains/administratif.py:2:class AdministratifAgent(BaseAgent):
/workspace/tmp/backend_konanFI9/app/agents/domains/civil.py:2:class CivilAgent(BaseAgent):
/workspace/tmp/backend_konanFI9/app/agents/domains/commercial.py:2:class CommercialAgent(BaseAgent):
/workspace/tmp/backend_konanFI9/app/agents/domains/constitution.py:2:class ConstitutionAgent(BaseAgent):
/workspace/tmp/backend_konanFI9/app/agents/domains/famille.py:2:class FamilleAgent(BaseAgent):
/workspace/tmp/backend_konanFI9/app/agents/domains/fiscalite.py:2:class FiscaliteAgent(BaseAgent):
/workspace/tmp/backend_konanFI9/app/agents/domains/immobilier.py:2:class ImmobilierAgent(BaseAgent):
/workspace/tmp/backend_konanFI9/app/agents/domains/penal.py:2:class PenalAgent(BaseAgent):
/workspace/tmp/backend_konanFI9/app/agents/domains/travail.py:2:class TravailAgent(BaseAgent):
/workspace/tmp/backend_konanFI9/app/api/api.py:2:from app.services.search import semantic_search, upsert_documents
/workspace/tmp/backend_konanFI9/app/api/auth.py:10:from app.models.user import User
/workspace/tmp/backend_konanFI9/app/api/auth.py:12:from app.utils.auth_bypass import optional_user
/workspace/tmp/backend_konanFI9/app/api/auth.py:21:class UserCreate(BaseModel):
/workspace/tmp/backend_konanFI9/app/api/auth.py:27:class Login(BaseModel):
/workspace/tmp/backend_konanFI9/app/api/auth_seed.py:5:from app.models.user import User, PlanType
/workspace/tmp/backend_konanFI9/app/api/files.py:9:from app.models.file_upload import FileUpload
/workspace/tmp/backend_konanFI9/app/api/lawsold.py:15:from app.models.law_diff_log import LawDiffLog
/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:10:from app.models.conversation import Conversation
/workspace/tmp/backend_konanFI9/app/api/search.py:2:from app.services.search import semantic_search, upsert_documents
/workspace/tmp/backend_konanFI9/app/api.py:5:from .models import User, LawArticle
/workspace/tmp/backend_konanFI9/app/api.py:6:from .schemas import UserCreate, Token, ChatRequest, ChatResponse, PDFRequest, UserOut
/workspace/tmp/backend_konanFI9/app/api.py:8:from .services.search import semantic_search, upsert_documents
/workspace/tmp/backend_konanFI9/app/api.py:9:from .services.openai_client import chat_completion
/workspace/tmp/backend_konanFI9/app/api.py:10:from .services.pdf import make_simple_pdf
/workspace/tmp/backend_konanFI9/app/config.py:7:class Settings(BaseSettings):
/workspace/tmp/backend_konanFI9/app/core/config.py:7:class Settings(BaseSettings):
/workspace/tmp/backend_konanFI9/app/crud.py:2:from app.models import Conversation
/workspace/tmp/backend_konanFI9/app/main.py:25:from app.models import Conversation
/workspace/tmp/backend_konanFI9/app/main.py:26:from app.schemas import ChatRequest
/workspace/tmp/backend_konanFI9/app/memory.py:3:from app import models
/workspace/tmp/backend_konanFI9/app/memory.py:6:    conv = models.Conversation(session_id=session_id, role=role, message=message)
/workspace/tmp/backend_konanFI9/app/memory.py:14:        db.query(models.Conversation)
/workspace/tmp/backend_konanFI9/app/memory.py:15:        .filter(models.Conversation.session_id == session_id)
/workspace/tmp/backend_konanFI9/app/memory.py:16:        .order_by(models.Conversation.created_at.desc())
/workspace/tmp/backend_konanFI9/app/models/__init__.py:1:from app.models.conversation import Conversation
/workspace/tmp/backend_konanFI9/app/models/__init__.py:2:from app.models.user import User
/workspace/tmp/backend_konanFI9/app/models/__init__.py:3:from app.models.file_upload import FileUpload  # ✅ ajout ici
/workspace/tmp/backend_konanFI9/app/models/conversation.py:1:# app/models/conversation.py
/workspace/tmp/backend_konanFI9/app/models/conversation.py:8:class Conversation(Base):
/workspace/tmp/backend_konanFI9/app/models/file_upload.py:4:class FileUpload(Base):
/workspace/tmp/backend_konanFI9/app/models/law.py:5:class LawArticle(Base):
/workspace/tmp/backend_konanFI9/app/models/law_article.py:4:class LawArticle(Base):
/workspace/tmp/backend_konanFI9/app/models/law_diff_log.py:2:# app/models/law_diff_log.py — Historique des comparaisons de lois
/workspace/tmp/backend_konanFI9/app/models/law_diff_log.py:8:class LawDiffLog(Base):
/workspace/tmp/backend_konanFI9/app/models/user.py:11:class User(Base):
/workspace/tmp/backend_konanFI9/app/models.py:1:# app/models.py
/workspace/tmp/backend_konanFI9/app/models.py:6:class Conversation(Base):
/workspace/tmp/backend_konanFI9/app/models.py:17:class LawArticle(Base):
/workspace/tmp/backend_konanFI9/app/models.py:28:class RefLanguage(Base):
/workspace/tmp/backend_konanFI9/app/models.py:37:class CurrentArticlesV(Base):
/workspace/tmp/backend_konanFI9/app/routers/chat.py:8:from app.models import Conversation
/workspace/tmp/backend_konanFI9/app/routers/chat.py:9:from app.schemas import ChatRequest, ChatResponse
/workspace/tmp/backend_konanFI9/app/routers/chat.py:10:from app.utils.lang_detector import detect_language
/workspace/tmp/backend_konanFI9/app/routers/chat.py:14:from app.services.llm_service import call_llm_api
/workspace/tmp/backend_konanFI9/app/routers/files.py:4:from app.models import FileUpload  # table que tu as utilisée pour stocker les fichiers
/workspace/tmp/backend_konanFI9/app/routers/user_router.py:4:from app.models.user import User, PlanType
/workspace/tmp/backend_konanFI9/app/routers/user_router.py:5:from app.schemas.user_schemas import UserCreate, UserLogin, UserResponse
/workspace/tmp/backend_konanFI9/app/schemas/__init__.py:2:# app/schemas/__init__.py — Modèles de base pour l'API Konan
/workspace/tmp/backend_konanFI9/app/schemas/__init__.py:6:class ChatRequest(BaseModel):
/workspace/tmp/backend_konanFI9/app/schemas/__init__.py:10:class ChatResponse(BaseModel):
/workspace/tmp/backend_konanFI9/app/schemas/diff_schema.py:3:class LawDiffItem(BaseModel):
/workspace/tmp/backend_konanFI9/app/schemas/law_schema.py:3:class LawArticleIn(BaseModel):
/workspace/tmp/backend_konanFI9/app/schemas/user.py:2:# app/schemas/user.py — Schémas Pydantic (Konan API)
/workspace/tmp/backend_konanFI9/app/schemas/user.py:8:class UserCreate(BaseModel):
/workspace/tmp/backend_konanFI9/app/schemas/user.py:13:class UserOut(BaseModel):
/workspace/tmp/backend_konanFI9/app/schemas/user.py:22:class Login(BaseModel):
/workspace/tmp/backend_konanFI9/app/schemas/user.py:26:class Token(BaseModel):
/workspace/tmp/backend_konanFI9/app/schemas/user_schemas.py:9:class UserCreate(BaseModel):
/workspace/tmp/backend_konanFI9/app/schemas/user_schemas.py:14:class UserLogin(BaseModel):
/workspace/tmp/backend_konanFI9/app/schemas/user_schemas.py:18:class UserResponse(BaseModel):
/workspace/tmp/backend_konanFI9/app/schemas.py:2:# app/schemas.py — Phase 3 stable finale
/workspace/tmp/backend_konanFI9/app/schemas.py:7:class ChatRequest(BaseModel):
/workspace/tmp/backend_konanFI9/app/schemas.py:11:class ChatResponse(BaseModel):
/workspace/tmp/backend_konanFI9/app/services/llm_service.py:1:# app/services/llm_service.py
/workspace/tmp/backend_konanFI9/app/services/search.py:1:# app/services/search.py
/workspace/tmp/backend_konanFI9/app/services/search.py:4:from chromadb.utils import embedding_functions
/workspace/tmp/backend_konanFI9/app/session.py:2:from app.models.conversation import Conversation
/workspace/tmp/backend_konanFI9/app/utils/auth_bypass.py:7:from app.models.user import User, PlanType
/workspace/tmp/backend_konanFI9/app/vector/index_laws.py:2:from app.utils.parser import iter_jsonl
/workspace/tmp/backend_konanFI9/app/vector/index_laws.py:3:from app.utils.cleaner import clean_record
/workspace/tmp/backend_konanFI9/app/vector/update_scheduler.py:5:from app.utils.jort_scraper import fetch_to_jsonl

6. Mécanismes d’authentification (indices JWT/bypass/refresh)
/workspace/tmp/backend_konanFI9/app/api/auth.py:4:from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
/workspace/tmp/backend_konanFI9/app/api/auth.py:11:from app.core.security import hash_password, verify_password, create_access_token, decode_token
/workspace/tmp/backend_konanFI9/app/api/auth.py:15:bearer = HTTPBearer(auto_error=False)
/workspace/tmp/backend_konanFI9/app/api/auth.py:23:    password: str
/workspace/tmp/backend_konanFI9/app/api/auth.py:29:    password: str
/workspace/tmp/backend_konanFI9/app/api/auth.py:43:        hashed_password=hash_password(p.password),
/workspace/tmp/backend_konanFI9/app/api/auth.py:48:    db.refresh(u)
/workspace/tmp/backend_konanFI9/app/api/auth.py:60:    if not u or not verify_password(p.password, u.hashed_password):
/workspace/tmp/backend_konanFI9/app/api/auth.py:63:    token = create_access_token(subject=str(u.id))
/workspace/tmp/backend_konanFI9/app/api/auth.py:65:        "access_token": token,
/workspace/tmp/backend_konanFI9/app/api/auth.py:66:        "token_type": "bearer",
/workspace/tmp/backend_konanFI9/app/api/auth.py:74:def _user_from_token(creds: HTTPAuthorizationCredentials | None, db: Session) -> User:
/workspace/tmp/backend_konanFI9/app/api/auth.py:78:    data = decode_token(creds.credentials)
/workspace/tmp/backend_konanFI9/app/api/auth.py:95:    return _user_from_token(creds, db)
/workspace/tmp/backend_konanFI9/app/api/auth.py:104:    return _user_from_token(creds, db)
/workspace/tmp/backend_konanFI9/app/api/auth_seed.py:6:from app.core.security import hash_password
/workspace/tmp/backend_konanFI9/app/api/auth_seed.py:19:    password = "KING"
/workspace/tmp/backend_konanFI9/app/api/auth_seed.py:31:        hashed_password=hash_password(password),
/workspace/tmp/backend_konanFI9/app/api/auth_seed.py:38:    db.refresh(new_user)
/workspace/tmp/backend_konanFI9/app/api/files.py:37:        db.refresh(new_file)
/workspace/tmp/backend_konanFI9/app/api/lawsold.py:41:SMTP_PASS = os.getenv("SMTP_PASS", "password-placeholder")
/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:70:    db.refresh(conv)
/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:92:    db.refresh(conv)
/workspace/tmp/backend_konanFI9/app/api.py:7:from .core.security import hash_password, verify_password, create_access_token
/workspace/tmp/backend_konanFI9/app/api.py:23:    user = User(email=data.email, hashed_password=hash_password(data.password))
/workspace/tmp/backend_konanFI9/app/api.py:26:    db.refresh(user)
/workspace/tmp/backend_konanFI9/app/api.py:33:    if not user or not verify_password(data.password, user.hashed_password):
/workspace/tmp/backend_konanFI9/app/api.py:34:        raise HTTPException(status_code=400, detail="Incorrect email or password")
/workspace/tmp/backend_konanFI9/app/api.py:35:    token = create_access_token({"sub": user.email})
/workspace/tmp/backend_konanFI9/app/api.py:36:    return {"access_token": token, "token_type": "bearer"}
/workspace/tmp/backend_konanFI9/app/config.py:14:    JWT_SECRET: str
/workspace/tmp/backend_konanFI9/app/config.py:15:    JWT_ALGORITHM: str = "HS256"
/workspace/tmp/backend_konanFI9/app/core/config.py:13:    JWT_SECRET: str = os.getenv("JWT_SECRET", "default_jwt_secret")
/workspace/tmp/backend_konanFI9/app/core/config.py:14:    JWT_ALGORITHM: str = "HS256"
/workspace/tmp/backend_konanFI9/app/core/security.py:6:from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
/workspace/tmp/backend_konanFI9/app/core/security.py:7:from jose import JWTError, jwt
/workspace/tmp/backend_konanFI9/app/core/security.py:11:bearer_scheme = HTTPBearer(auto_error=True)
/workspace/tmp/backend_konanFI9/app/core/security.py:13:SECRET_KEY = os.getenv("JWT_SECRET", "change-me")
/workspace/tmp/backend_konanFI9/app/core/security.py:14:ALGORITHM = os.getenv("JWT_ALGORITHM", "HS256")
/workspace/tmp/backend_konanFI9/app/core/security.py:15:ACCESS_TOKEN_EXPIRE_MINUTES = int(os.getenv("JWT_ACCESS_TOKEN_EXPIRE_MINUTES", "1440"))
/workspace/tmp/backend_konanFI9/app/core/security.py:18:def hash_password(password: str) -> str:
/workspace/tmp/backend_konanFI9/app/core/security.py:19:    return pwd_context.hash(password)
/workspace/tmp/backend_konanFI9/app/core/security.py:22:def verify_password(plain_password: str, hashed_password: str) -> bool:
/workspace/tmp/backend_konanFI9/app/core/security.py:24:        return pwd_context.verify(plain_password, hashed_password)
/workspace/tmp/backend_konanFI9/app/core/security.py:29:def create_access_token(
/workspace/tmp/backend_konanFI9/app/core/security.py:48:def decode_token(token: str) -> Dict[str, Any]:
/workspace/tmp/backend_konanFI9/app/core/security.py:49:    return jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
/workspace/tmp/backend_konanFI9/app/core/security.py:53:    token = credentials.credentials
/workspace/tmp/backend_konanFI9/app/core/security.py:55:        data = decode_token(token)
/workspace/tmp/backend_konanFI9/app/core/security.py:58:            raise JWTError("Subject must be a string.")
/workspace/tmp/backend_konanFI9/app/core/security.py:60:    except JWTError as exc:
/workspace/tmp/backend_konanFI9/app/core/security.py:63:            detail="Invalid or expired token",
/workspace/tmp/backend_konanFI9/app/crud.py:13:    db.refresh(conv)
/workspace/tmp/backend_konanFI9/app/memory.py:9:    db.refresh(conv)
/workspace/tmp/backend_konanFI9/app/models/user.py:17:    hashed_password = Column(String(255), nullable=False)
/workspace/tmp/backend_konanFI9/app/routers/auth_router.py:12:    password = data.get("password")
/workspace/tmp/backend_konanFI9/app/routers/auth_router.py:13:    if email and password:
/workspace/tmp/backend_konanFI9/app/routers/auth_router.py:17:# /auth/me → renvoie 403 si pas de token
/workspace/tmp/backend_konanFI9/app/routers/auth_router.py:23:def get_current_user(token: str = Depends(lambda: None)):
/workspace/tmp/backend_konanFI9/app/routers/user_router.py:6:from app.core.security import hash_password, verify_password, create_access_token
/workspace/tmp/backend_konanFI9/app/routers/user_router.py:15:    hashed = hash_password(user.password)
/workspace/tmp/backend_konanFI9/app/routers/user_router.py:16:    db_user = User(email=user.email, hashed_password=hashed, full_name=user.full_name)
/workspace/tmp/backend_konanFI9/app/routers/user_router.py:19:    db.refresh(db_user)
/workspace/tmp/backend_konanFI9/app/routers/user_router.py:25:    if not user or not verify_password(data.password, user.hashed_password):
/workspace/tmp/backend_konanFI9/app/routers/user_router.py:27:    token = create_access_token({"sub": str(user.id)})
/workspace/tmp/backend_konanFI9/app/routers/user_router.py:28:    return {"access_token": token, "token_type": "bearer", "plan": user.plan.value}
/workspace/tmp/backend_konanFI9/app/schemas/user.py:10:    password: str
/workspace/tmp/backend_konanFI9/app/schemas/user.py:24:    password: str
/workspace/tmp/backend_konanFI9/app/schemas/user.py:27:    access_token: str
/workspace/tmp/backend_konanFI9/app/schemas/user.py:28:    token_type: str = "bearer"
/workspace/tmp/backend_konanFI9/app/schemas/user_schemas.py:11:    password: str
/workspace/tmp/backend_konanFI9/app/schemas/user_schemas.py:16:    password: str
/workspace/tmp/backend_konanFI9/app/services/llm_service.py:30:        "Authorization": f"Bearer {API_KEY}",
/workspace/tmp/backend_konanFI9/app/services/llm_service.py:37:        "max_tokens": MAX_TOKENS,
/workspace/tmp/backend_konanFI9/app/services/openai_client.py:9:    headers = {"Authorization": f"Bearer {settings.OPENAI_API_KEY}", "Content-Type": "application/json"}
/workspace/tmp/backend_konanFI9/app/session.py:17:    db.refresh(new_message)
/workspace/tmp/backend_konanFI9/app/utils/auth_bypass.py:15:    hashed_password="",
/workspace/tmp/backend_konanFI9/app/vector/embeddings.py:20:    headers = {"Authorization": f"Bearer {OPENAI_API_KEY}", "Content-Type":"application/json"}

7. Configuration (Base, engine, get_db, settings)
/workspace/tmp/backend_konanFI9/app/api/auth.py:6:from sqlalchemy.orm import Session
/workspace/tmp/backend_konanFI9/app/api/auth.py:9:from app.database import get_db
/workspace/tmp/backend_konanFI9/app/api/auth.py:36:def register_user(p: UserCreate, db: Session = Depends(get_db)):
/workspace/tmp/backend_konanFI9/app/api/auth.py:57:def login_user(p: Login, db: Session = Depends(get_db)):
/workspace/tmp/backend_konanFI9/app/api/auth.py:74:def _user_from_token(creds: HTTPAuthorizationCredentials | None, db: Session) -> User:
/workspace/tmp/backend_konanFI9/app/api/auth.py:94:def _current_user(creds: HTTPAuthorizationCredentials = Depends(bearer), db: Session = Depends(get_db)) -> User:
/workspace/tmp/backend_konanFI9/app/api/auth.py:100:    db: Session = Depends(get_db),
/workspace/tmp/backend_konanFI9/app/api/auth_seed.py:2:from sqlalchemy.orm import Session
/workspace/tmp/backend_konanFI9/app/api/auth_seed.py:4:from app.database import get_db
/workspace/tmp/backend_konanFI9/app/api/auth_seed.py:12:def seed_test_user(db: Session = Depends(get_db)):
/workspace/tmp/backend_konanFI9/app/api/files.py:7:from sqlalchemy.orm import Session
/workspace/tmp/backend_konanFI9/app/api/files.py:8:from app.db.session import get_db
/workspace/tmp/backend_konanFI9/app/api/files.py:21:async def upload_file(file: UploadFile = File(...), db: Session = Depends(get_db)):
/workspace/tmp/backend_konanFI9/app/api/files.py:54:def list_files(db: Session = Depends(get_db)):
/workspace/tmp/backend_konanFI9/app/api/files.py:70:def delete_file(file_id: int, db: Session = Depends(get_db)):
/workspace/tmp/backend_konanFI9/app/api/health.py:2:from sqlalchemy.orm import Session
/workspace/tmp/backend_konanFI9/app/api/health.py:3:from app.database import get_db
/workspace/tmp/backend_konanFI9/app/api/health.py:8:def health_check(db: Session = Depends(get_db)):
/workspace/tmp/backend_konanFI9/app/api/laws.py:6:from app.database import get_db
/workspace/tmp/backend_konanFI9/app/api/laws.py:49:    db = next(get_db())
/workspace/tmp/backend_konanFI9/app/api/laws.py:56:    db = next(get_db())
/workspace/tmp/backend_konanFI9/app/api/lawsold.py:14:from sqlalchemy.orm import Session
/workspace/tmp/backend_konanFI9/app/api/lawsold.py:16:from app.database import SessionLocal
/workspace/tmp/backend_konanFI9/app/api/lawsold.py:336:            db: Session = SessionLocal()
/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:6:from sqlalchemy.orm import Session
/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:9:from app.database import get_db
/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:25:    db: Session = Depends(get_db),
/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:57:async def create_conversation(request: Request, db: Session = Depends(get_db)):
/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:83:def update_conversation(conv_id: int, data: dict, db: Session = Depends(get_db)):
/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:100:def delete_conversation(conv_id: int, db: Session = Depends(get_db)):
/workspace/tmp/backend_konanFI9/app/api/routes/conversations.py:115:    db: Session = Depends(get_db),
/workspace/tmp/backend_konanFI9/app/api.py:3:from sqlalchemy.orm import Session
/workspace/tmp/backend_konanFI9/app/api.py:4:from .db import get_db, Base, engine
/workspace/tmp/backend_konanFI9/app/api.py:15:Base.metadata.create_all(bind=engine)
/workspace/tmp/backend_konanFI9/app/api.py:20:def register(data: UserCreate, db: Session = Depends(get_db)):
/workspace/tmp/backend_konanFI9/app/api.py:31:def login(data: UserCreate, db: Session = Depends(get_db)):
/workspace/tmp/backend_konanFI9/app/api.py:41:def seed_laws(db: Session = Depends(get_db)):
/workspace/tmp/backend_konanFI9/app/audit_db.py:3:from sqlalchemy import create_engine, inspect, text
/workspace/tmp/backend_konanFI9/app/audit_db.py:24:    engine = create_engine(DATABASE_URL)
/workspace/tmp/backend_konanFI9/app/audit_db.py:25:    with engine.connect() as conn:
/workspace/tmp/backend_konanFI9/app/audit_db.py:35:    inspector = inspect(engine)
/workspace/tmp/backend_konanFI9/app/config.py:2:from pydantic_settings import BaseSettings, SettingsConfigDict
/workspace/tmp/backend_konanFI9/app/config.py:4:from .core.config import Settings, settings
/workspace/tmp/backend_konanFI9/app/config.py:7:class Settings(BaseSettings):
/workspace/tmp/backend_konanFI9/app/config.py:41:    model_config = SettingsConfigDict(
/workspace/tmp/backend_konanFI9/app/config.py:77:settings = Settings()
/workspace/tmp/backend_konanFI9/app/core/chroma_client.py:3:from chromadb.config import Settings
/workspace/tmp/backend_konanFI9/app/core/config.py:2:from pydantic_settings import BaseSettings, SettingsConfigDict
/workspace/tmp/backend_konanFI9/app/core/config.py:7:class Settings(BaseSettings):
/workspace/tmp/backend_konanFI9/app/core/config.py:34:    model_config = SettingsConfigDict(
/workspace/tmp/backend_konanFI9/app/core/config.py:58:settings = Settings()
/workspace/tmp/backend_konanFI9/app/crud.py:1:from sqlalchemy.orm import Session
/workspace/tmp/backend_konanFI9/app/crud.py:4:def create_conversation(db: Session, session_id: str, role: str, message_user: str = None, message_konan: str = None):
/workspace/tmp/backend_konanFI9/app/crud.py:16:def get_conversations(db: Session, session_id: str):
/workspace/tmp/backend_konanFI9/app/database.py:7:from sqlalchemy import create_engine
/workspace/tmp/backend_konanFI9/app/database.py:8:from sqlalchemy.orm import sessionmaker, declarative_base
/workspace/tmp/backend_konanFI9/app/database.py:41:engine = create_engine(DATABASE_URL, pool_pre_ping=True, echo=False)
/workspace/tmp/backend_konanFI9/app/database.py:42:SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
/workspace/tmp/backend_konanFI9/app/database.py:43:Base = declarative_base()
/workspace/tmp/backend_konanFI9/app/database.py:46:def get_db():
/workspace/tmp/backend_konanFI9/app/database.py:47:    db = SessionLocal()
/workspace/tmp/backend_konanFI9/app/db/__init__.py:1:from sqlalchemy import create_engine
/workspace/tmp/backend_konanFI9/app/db/__init__.py:2:from sqlalchemy.orm import declarative_base
/workspace/tmp/backend_konanFI9/app/db/__init__.py:3:from sqlalchemy.orm import sessionmaker
/workspace/tmp/backend_konanFI9/app/db/__init__.py:6:# --- Configuration de la base PostgreSQL ---
/workspace/tmp/backend_konanFI9/app/db/__init__.py:16:engine = create_engine(DATABASE_URL)
/workspace/tmp/backend_konanFI9/app/db/__init__.py:17:SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
/workspace/tmp/backend_konanFI9/app/db/__init__.py:20:Base = declarative_base()
/workspace/tmp/backend_konanFI9/app/db/__init__.py:23:def get_db():
/workspace/tmp/backend_konanFI9/app/db/__init__.py:24:    db = SessionLocal()
/workspace/tmp/backend_konanFI9/app/db/base.py:4:from sqlalchemy.orm import declarative_base
/workspace/tmp/backend_konanFI9/app/db/base.py:6:Base = declarative_base()
/workspace/tmp/backend_konanFI9/app/db/session.py:3:from sqlalchemy import create_engine
/workspace/tmp/backend_konanFI9/app/db/session.py:4:from sqlalchemy.orm import declarative_base, sessionmaker
/workspace/tmp/backend_konanFI9/app/db/session.py:8:engine = create_engine(settings.db_url, pool_pre_ping=True, connect_args=_connect_args)
/workspace/tmp/backend_konanFI9/app/db/session.py:9:SessionLocal = sessionmaker(bind=engine, autocommit=False, autoflush=False)
/workspace/tmp/backend_konanFI9/app/db/session.py:10:Base = declarative_base()
/workspace/tmp/backend_konanFI9/app/db/session.py:12:def get_db() -> Generator:
/workspace/tmp/backend_konanFI9/app/db/session.py:13:    db = SessionLocal()
/workspace/tmp/backend_konanFI9/app/main.py:19:from sqlalchemy.orm import Session
/workspace/tmp/backend_konanFI9/app/main.py:24:from app.database import get_db, engine
/workspace/tmp/backend_konanFI9/app/main.py:54:logging.basicConfig(filename=LOG_FILE, level=logging.INFO, format="%(message)s", encoding="utf-8")
/workspace/tmp/backend_konanFI9/app/main.py:133:    with engine.connect() as conn:
/workspace/tmp/backend_konanFI9/app/memory.py:2:from sqlalchemy.orm import Session
/workspace/tmp/backend_konanFI9/app/memory.py:5:def add_message(db: Session, session_id: str, role: str, message: str):
/workspace/tmp/backend_konanFI9/app/memory.py:12:def get_history(db: Session, session_id: str, limit: int = 5):
/workspace/tmp/backend_konanFI9/app/routers/chat.py:6:from sqlalchemy.orm import Session
/workspace/tmp/backend_konanFI9/app/routers/chat.py:7:from app.database import get_db
/workspace/tmp/backend_konanFI9/app/routers/chat.py:27:def get_conversation_history(db: Session, session_id: str, limit: int = 10):
/workspace/tmp/backend_konanFI9/app/routers/chat.py:52:async def chat_endpoint(request: ChatRequest, db: Session = Depends(get_db)):
/workspace/tmp/backend_konanFI9/app/routers/files.py:3:from sqlalchemy.orm import Session
/workspace/tmp/backend_konanFI9/app/routers/files.py:5:from app.database import get_db
/workspace/tmp/backend_konanFI9/app/routers/files.py:12:def get_uploaded_file(file_id: str, db: Session = Depends(get_db), user=Depends(verify_jwt)):
/workspace/tmp/backend_konanFI9/app/routers/memory_vector.py:5:from chromadb.config import Settings
/workspace/tmp/backend_konanFI9/app/routers/memory_vector.py:15:    Settings(
/workspace/tmp/backend_konanFI9/app/routers/stripe_router.py:45:        session = stripe.checkout.Session.create(
/workspace/tmp/backend_konanFI9/app/routers/stripe_router.py:97:        session = stripe.checkout.Session.retrieve(session_id)
/workspace/tmp/backend_konanFI9/app/routers/user_router.py:2:from sqlalchemy.orm import Session
/workspace/tmp/backend_konanFI9/app/routers/user_router.py:3:from app.database import get_db
/workspace/tmp/backend_konanFI9/app/routers/user_router.py:11:def register(user: UserCreate, db: Session = Depends(get_db)):
/workspace/tmp/backend_konanFI9/app/routers/user_router.py:23:def login(data: UserLogin, db: Session = Depends(get_db)):
/workspace/tmp/backend_konanFI9/app/routers/user_router.py:31:def me(db: Session = Depends(get_db)):
/workspace/tmp/backend_konanFI9/app/schemas/law_schema.py:11:    class Config:
/workspace/tmp/backend_konanFI9/app/schemas/user.py:19:    class Config:
/workspace/tmp/backend_konanFI9/app/schemas/user_schemas.py:23:    class Config:
/workspace/tmp/backend_konanFI9/app/session.py:1:from sqlalchemy.orm import Session
/workspace/tmp/backend_konanFI9/app/session.py:5:def add_message(db: Session, session_id: str, sender: str, message: str):
/workspace/tmp/backend_konanFI9/app/session.py:22:def get_history(db: Session, session_id: str):
/workspace/tmp/backend_konanFI9/app/vector/chroma_manager.py:7:from chromadb.config import Settings
/workspace/tmp/backend_konanFI9/app/vector/chroma_manager.py:20:        Settings(
/workspace/tmp/backend_konanFI9/app/vector/chroma_manager.py:139:from chromadb.config import Settings
/workspace/tmp/backend_konanFI9/app/vector/chroma_manager.py:152:        Settings(

8. Migrations Alembic
Répertoires Alembic:

Fichiers Alembic:

Notes:
- Analyse effectuée EXCLUSIVEMENT sur /workspace/tmp/backend_konanFI9/app.
- Les payloads sont indiqués via indices (response_model, Body, Depends). Pour les schémas précis, se référer aux classes Pydantic listées et aux signatures des fonctions correspondantes.
- Aucun scan de la racine ni des ~12k fichiers parasites.
