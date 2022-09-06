import React, { useState } from "react";



  return (
    <div>
      {isEdit ? (
        <form onSubmit={handleOnEditSubmit}>
          <input placeholder="Name" name="name"  />
          <input placeholder="Email" name="email"  />
          <button >Save</button>
        </form>
      ) : (
        <div className="user">
          <span className="user-name">{name}</span>
          <span className="user-email">{email}</span>
        </div>
      )}
    </div>
  );
;
