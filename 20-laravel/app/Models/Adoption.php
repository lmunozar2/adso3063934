<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

class Adoption extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'user_id',
        'pet_id'
    ];

    // RelationShips
    // Adoption belongTo  User
    public function user() {
        return $this->belongsTo(User::class);
    }
    // Adoption belongTo Pet
    public function pet() {
        return $this->belongsTo(Pet::class);
    }

    public function scopenames(Builder $query, $q)
    {
        if ($q = trim($q)) {

            // Búsqueda por nombre de usuario
            $query->whereHas('user', function (Builder $userQuery) use ($q) {
                $userQuery->where('fullname', 'LIKE', "%{$q}%");
            })

                // Búsqueda por nombre de mascota
                ->orWhereHas('pet', function (Builder $petQuery) use ($q) {
                    $petQuery->where('name', 'LIKE', "%{$q}%");
                })

                // Búsqueda por tipo de mascota
                ->orWhereHas('pet', function (Builder $petQuery) use ($q) {
                    $petQuery->where('kind', 'LIKE', "%{$q}%");
                });
        }
        }
}
