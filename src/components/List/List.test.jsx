import { render, screen } from "@testing-library/react";
import List from "./List";

const data = ["html", "css", "js"];

// Описываем коллекцию тестов, группируя их в блоке describe
describe("List component", () => {
  //! Тест для проверки рендеринга компонента List с данными
  it("List renders", () => {
    render(<List items={data} />);

    // Проверяем, что элемент списка (role="list") присутствует в документе
    expect(screen.getByRole("list")).toBeInTheDocument();
    // Проверяем, что текст "html" также присутствует в документе
    expect(screen.getByText(/html/)).toBeInTheDocument();
  });

  //! Тест для проверки поведения компонента при отсутствии данных
  it("List renders without data", () => {
    render(<List />); // Рендерим компонент без переданных данных
    // Проверяем, что элемент списка отсутствует в документе
    expect(screen.queryByRole("list")).toBeNull();
  });

  //! Тест для создания снимка (snapshot) компонента с данными
  it("List snapshot", () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const list = render(<List items={data} />); // Рендерим компонент и сохраняем результат

    // Сравниваем полученный снимок с сохраненным снимком
    expect(list).toMatchSnapshot();
  });

  //! Тест для создания снимка пустого компонента
  it("List empty snapshot", () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const list = render(<List />); // Рендерим пустой компонент

    // Сравниваем полученный снимок с сохраненным снимком
    expect(list).toMatchSnapshot();
  });
});
