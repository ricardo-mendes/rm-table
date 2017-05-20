import { ComunicacaoComponentesPage } from './app.po';

describe('comunicacao-componentes App', () => {
  let page: ComunicacaoComponentesPage;

  beforeEach(() => {
    page = new ComunicacaoComponentesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
