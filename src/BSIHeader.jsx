export function BSIHeader() {
  return (
    <div class="it-header-center-wrapper it-small-header mb-5">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="it-header-center-content-wrapper">
              <div class="it-brand-wrapper">
                <a href="#">
                  <svg class="icon" aria-hidden="true">
                    <use href="/bootstrap-italia/dist/svg/sprites.svg#it-pa"></use>
                  </svg>
                  <div class="it-brand-text">
                    <div class="it-brand-title">Todo list</div>
                    <div class="it-brand-tagline d-none d-md-block">
                      Creata con React 18.2.0 e Bootstrap Italia 2.8.5
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
