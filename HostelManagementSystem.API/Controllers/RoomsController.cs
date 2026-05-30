using Microsoft.AspNetCore.Mvc;
using HostelManagementSystem.API.Models;

[ApiController]
[Route("api/[controller]")]
public class RoomsController : ControllerBase
{
    private static readonly List<Room> _rooms = new();

    [HttpGet]
    public IActionResult GetAll() => Ok(_rooms);

    [HttpPost]
    public IActionResult Create([FromBody] Room room)
    {
        room.Id = _rooms.Count;
        _rooms.Add(room);
        return Ok(room);
    }

    [HttpPut("{id}")]
    public IActionResult Update(int id, [FromBody] Room updatedRoom)
    {
        if (id < 0 || id >= _rooms.Count) return NotFound();
        updatedRoom.Id = id;
        _rooms[id] = updatedRoom;
        return Ok(updatedRoom);
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        if (id < 0 || id >= _rooms.Count) return NotFound();
        _rooms.RemoveAt(id);
        return Ok("Deleted");
    }
}