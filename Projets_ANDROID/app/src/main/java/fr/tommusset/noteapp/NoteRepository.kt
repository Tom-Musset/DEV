package fr.tommusset.noteapp

import android.content.SharedPreferences
import com.google.gson.Gson
import com.google.gson.reflect.TypeToken
import fr.tommusset.noteapp.model.NoteModel
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.flow

class NoteRepository (private val sharedPreferences: SharedPreferences){

    private val gson = Gson()

    fun getSavedNotes() : Flow<List<NoteModel>> = flow{
        val serializedNotes = sharedPreferences.getString(SAVED_NOTES, null)
        val typeToken = object: TypeToken<List<NoteModel>>(){}.type
        if(serializedNotes != null){
            emit(gson.fromJson(serializedNotes, typeToken))
        }else{
            emit(ArrayList<NoteModel>())
        }
    }

    fun saveNotes(notesToSave: List<NoteModel>){
        val serializedNoteToSave = gson.toJson(notesToSave)
        with(sharedPreferences.edit()){
            putString(SAVED_NOTES, serializedNoteToSave)
            apply()
        }
    }
}