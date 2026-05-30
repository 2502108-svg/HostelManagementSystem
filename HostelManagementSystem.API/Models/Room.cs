namespace HostelManagementSystem.API.Models;

public class Room
{
    public int Id { get; set; }
    public string RoomNumber { get; set; } = string.Empty;
    public string Owner { get; set; } = string.Empty;
    public string RoomType { get; set; } = string.Empty;
}