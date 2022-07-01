import { useState } from "react";
import { isNameTaken } from "../../utilities/api";

import CancelButton from "../buttons/CancelButton";
import CreateButton from "../buttons/CreateButton";
import UpdateButton from "../buttons/UpdateButton";

import "./person-edit.css";

export default function PersonEdit({ initialPersonData = {}, updateMode = false, onSubmit = (personData, updateMode, e) => { }, onCancel = (updateMode, e) => { } }) {
    const [personData, setPersonData] = useState({ name: "", group: "", color: "", ...initialPersonData });
    const [showNameWarning, setShowNameWarning] = useState(false);

    const changeData = (key, e) => {
        e.preventDefault();

        const value = e.target.value;

        if (!updateMode && key === "name" && value.length > 0) {
            isNameTaken(value).then(taken => {
                setShowNameWarning(taken);
            });
        }

        setPersonData({ ...personData, [key]: value });
    };

    const cancelEdit = (e) => {
        e.preventDefault();
        setPersonData({ name: "", group: "", color: "", ...initialPersonData });
        onCancel(updateMode, e);
    };

    const submit = (e) => {
        e.preventDefault();

        onSubmit(personData, updateMode, e);
    };

    const dataInvalid = (personData.name === undefined || personData.name === "") ||
        (personData.group === undefined || personData.group === "") ||
        (personData.color === undefined || personData.color === "");

    const dataUnchanged = personData.group === initialPersonData.group && personData.color === initialPersonData.color
    const confirmButton = updateMode ?
        <UpdateButton onClick={submit} disabled={dataInvalid || dataUnchanged} /> :
        <CreateButton disabled={dataInvalid || showNameWarning} onClick={submit} />;

    return (
        <div className="person-edit">
            <div className="person-edit-form">
                <div>
                    <label>
                        <div>
                            Name:
                        </div>

                        <div>
                            <input className={updateMode ? "disabled" : ""} value={personData.name} onChange={e => changeData("name", e)} readOnly={updateMode} />
                        </div>
                    </label>
                    {showNameWarning ? <div className="warning">Name is already taken.</div> : <></>}
                </div>

                <div>
                    <label>
                        <div>
                            Group:
                        </div>

                        <div>
                            <input value={personData.group} onChange={e => changeData("group", e)} />
                        </div>
                    </label>
                </div>

                <div>
                    <label>
                        <div>
                            Color:
                        </div>

                        <div>
                            <input value={personData.color} onChange={e => changeData("color", e)} />
                        </div>
                    </label>
                </div>
            </div>

            <div>
                {confirmButton}
                <CancelButton onClick={cancelEdit} disabled={updateMode && dataUnchanged} />
            </div>
        </div>
    );
}
