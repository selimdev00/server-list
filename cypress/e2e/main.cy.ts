describe("Test project functionality", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");

    cy.get("[data-server-list-item]").first().click();

    cy.get("[data-server-editor]").should("exist");
  });

  it("Should open server list", () => {
    cy.get("[data-server-list]").should("exist");

    cy.get("[data-server-list-item]").should("have.length", 5);
  });

  it("Should edit server", () => {
    cy.get("#customer_id").clear().type("test");

    cy.get("#server_name").clear().type("test");

    cy.get("#type").select("dedicated");

    cy.get("[data-server-editor]").submit();

    cy.get("[data-server-editor]").should("not.exist");

    cy.get("[data-server-list-item]").first().click();

    cy.get("[data-server-editor]").should("exist");

    cy.get("#customer_id").should("have.value", "test");

    cy.get("#server_name").should("have.value", "test");

    cy.get("#type").should("have.value", "dedicated");
  });

  it("Should delete server", () => {
    cy.get("#delete").click();

    cy.get("[data-server-list-item]").should("have.length", 4);
  });

  it("Should cancel editing server", () => {
    cy.get("[data-server-list-item]").first().click();

    cy.get("[data-server-editor]").should("exist");

    cy.get("#cancel").click();

    cy.get("[data-server-editor]").should("not.exist");
  });
});
