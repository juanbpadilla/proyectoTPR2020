<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Like extends Model
{
    use HasFactory;

    protected $table = 'likes';

    //Realacion una imagen, muchos comentarios
    public function images(){
        return $this->belongsTo('App\Models\Image', 'image_id');
    }

    //Relacion un usuario muchos comentarios
    public function users(){
        return $this->belongsTo('App\Models\User', 'user_id');
    }
}
