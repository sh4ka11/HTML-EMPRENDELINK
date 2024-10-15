document.addEventListener("DOMContentLoaded", function() {
    const navbar = `
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <!-- Logo con espacio a la derecha -->
            <a class="navbar-brand me-3" href="home_inversor.html"><img src="link/16.png" alt="" width="250" height="90"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <!-- Añadir ms-auto para alinear a la derecha -->
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item me-3">
                        <a class="nav-link active" aria-current="page" href="home_inversor.html"><i class="fas fa-home fa-lg me-1 text-muted"></i> Inicio</a>
                    </li>
                    <li class="nav-item me-3">
                        <a class="nav-link" href="inverNoti1.html"><i class="fas fa-bell fa-lg me-1 text-muted"></i> Notificaciones</a>
                    </li>
                    <li class="nav-item me-3">
                        <a class="nav-link" href="contactanosInver1.html"><i class="fas fa-question-circle fa-lg me-1 text-muted"></i> Ayuda</a>
                    </li>
                    <li class="nav-item me-3">
                        <a class="nav-link" href="CHAT-INVERSIONISTA.HTML"><i class="fas fa-comments fa-lg me-1 text-muted"></i> Chat</a>
                    </li>
                    <li class="nav-item me-3">
                        <a class="nav-link" href="busqueda_filtro_inver.html"><i class="fas fa-search fa-lg me-1 text-muted"></i> Busqueda de empredimientos</a>
                    </li>
                    <li class="nav-item me-3">
                        <a class="nav-link" href="ListaInversionista.html"><i class="fas fa-search fa-lg me-1 text-muted"></i> Busqueda de emprendores</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="perfilInversor.html"><i class="fas fa-user fa-lg me-1 text-muted"></i>Perfil</a>
                    </li>
                     <li class="nav-item">
                        <a class="nav-link" href="index.html"><i class="fas fa-sign-out-alt fa-lg me-1 text-muted"></i>Cerrar</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    `;
    document.getElementById("navbar-container").innerHTML = navbar;
});
