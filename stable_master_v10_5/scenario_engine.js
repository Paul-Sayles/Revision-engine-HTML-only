// ==========================================
// SCENARIO ENGINE MODULE
// Revision Machine v10.5 Expansion
// ==========================================

function showScenario(question) {

    showScreen("scenarioScreen");

    document.getElementById("scenarioQuestion").textContent =
        question.question;

    const partsBox =
        document.getElementById("scenarioParts");

    const feedbackBox =
        document.getElementById("scenarioFeedback");

    const nextButton =
        document.getElementById("scenarioNextButton");

    partsBox.innerHTML = "";
    feedbackBox.innerHTML = "";

    nextButton.style.display = "none";

    question.parts.forEach((part, index) => {

        const partDiv = document.createElement("div");

        partDiv.className = "scenario-part";

        partDiv.innerHTML = `
            <p>
                <strong>Part ${index + 1}:</strong>
                ${part.q}
            </p>

            <p>
                <em>
                    ${part.marks}
                    mark${part.marks === 1 ? "" : "s"}
                </em>
            </p>

            <textarea
                id="scenarioAnswer${index}"
                rows="4"
                placeholder="Type your answer here..."
            ></textarea>
        `;

        partsBox.appendChild(partDiv);

    });

}



function checkScenarioAnswer() {

    let totalMarks = 0;
    let awardedMarks = 0;

    let feedbackHTML = "";

    currentQuestion.parts.forEach((part, index) => {

        totalMarks += part.marks;

        const userAnswer =
            document
                .getElementById(`scenarioAnswer${index}`)
                .value
                .toLowerCase()
                .trim();

        let partAwarded = 0;

        part.answer.forEach(keyword => {

            if (
                userAnswer.includes(
                    keyword.toLowerCase()
                )
            ) {
                partAwarded++;
            }

        });

        if (partAwarded > part.marks) {
            partAwarded = part.marks;
        }

        awardedMarks += partAwarded;

        feedbackHTML += `
            <div class="scenario-feedback-part">

                <p>
                    <strong>
                        Part ${index + 1}
                    </strong>

                    : ${partAwarded}/${part.marks}
                </p>

                <p>
                    Expected keywords:
                    ${part.answer.join(", ")}
                </p>

            </div>
        `;

    });

    feedbackHTML += `
        <hr>

        <h3>
            Total:
            ${awardedMarks}/${totalMarks}
        </h3>
    `;

    document.getElementById(
        "scenarioFeedback"
    ).innerHTML = feedbackHTML;

    document.getElementById(
        "scenarioNextButton"
    ).style.display = "inline-block";

}
