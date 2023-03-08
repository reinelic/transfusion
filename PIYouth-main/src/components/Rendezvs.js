import React from 'react'

export const Rendezvs = () => {
  return (
    <div className="container text-light">
      

<form className="mt-2 p-2">
  <div className="mb-2">
    <label for="exampleInputEmail1" className="form-label text-info">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">On ne partegera jamais votre email</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label text-info"> Selectionner CDS</label>
    <select type="password" class="form-control" id="exampleInputPassword1"> 
    <option value="">CDS1</option>
    <option value="">CDS2</option>
    <option value="">CDS3</option>
    
    </select>
  </div>
  
  <button type="submit" class="btn btn-primary">Confirmer</button>
</form>
    </div>
  )
}
