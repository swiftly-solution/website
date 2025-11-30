---
title: IGameFileSystem
---

# Interface IGameFileSystem

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/FileSystem/IGameFileSystem.cs#L3)

**Namespace**: [SwiftlyS2.Shared.FileSystem](/docs/api/filesystem)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface IGameFileSystem
```

## Methods

### AddSearchPath(string, string, SearchPathAdd_t, SearchPathPriority_t)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/FileSystem/IGameFileSystem.cs#L33)

Adds a search path to the file system.

```csharp
void AddSearchPath(string path, string pathId, SearchPathAdd_t addType, SearchPathPriority_t priority)
```

#### Parameters

- **path**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The path to add.
- **pathId**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The ID of the path to add in.
- **addType**: [SearchPathAdd_t](/docs/api/filesystem/searchpathadd_t) - The type of addition to perform.
- **priority**: [SearchPathPriority_t](/docs/api/filesystem/searchpathpriority_t) - The priority of the search path.

### FileExists(string, string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/FileSystem/IGameFileSystem.cs#L41)

Checks if a file exists at the given file path and path ID.

```csharp
bool FileExists(string filePath, string pathId)
```

#### Parameters

- **filePath**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The file path to check.
- **pathId**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The ID of the path to check in.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if the file exists, false otherwise.

### FindFileAbsoluteList(string, string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/FileSystem/IGameFileSystem.cs#L108)

Finds all files matching the given wildcard and path ID.

```csharp
List<string> FindFileAbsoluteList(string wildcard, string pathId)
```

#### Parameters

- **wildcard**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The wildcard to match files against.
- **pathId**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The ID of the path to search in.

#### Returns

- [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)> - A list of all files matching the given wildcard and path ID.

### GetFileSize(string, string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/FileSystem/IGameFileSystem.cs#L75)

Gets the size of a file at the given file path and path ID.

```csharp
uint GetFileSize(string filePath, string pathId)
```

#### Parameters

- **filePath**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The path to the file to get the size of.
- **pathId**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The ID of the path to get the file size from.

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32) - The size of the file in bytes.

### GetSearchPath(string, GetSearchPathTypes_t, int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/FileSystem/IGameFileSystem.cs#L50)

Gets the search path(s) for the given path ID and search path type.

```csharp
string GetSearchPath(string pathId, GetSearchPathTypes_t searchPathType, int searchPathsToGet)
```

#### Parameters

- **pathId**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The ID of the path to get the search paths for.
- **searchPathType**: [GetSearchPathTypes_t](/docs/api/filesystem/getsearchpathtypes_t) - The type of search path to get.
- **searchPathsToGet**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The number of search paths to get.

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string) - The search path(s) for the given path ID and search path type.

### IsDirectory(string, string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/FileSystem/IGameFileSystem.cs#L16)

Checks if a directory exists at the given path and path ID.

```csharp
bool IsDirectory(string path, string pathId)
```

#### Parameters

- **path**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The path to check.
- **pathId**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The ID of the path to search in.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if the directory exists, false otherwise.

### IsFileWritable(string, string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/FileSystem/IGameFileSystem.cs#L91)

Checks if a file is writable at the given file path and path ID.

```csharp
bool IsFileWritable(string filePath, string pathId)
```

#### Parameters

- **filePath**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The path to the file to check.
- **pathId**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The ID of the path to check in.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if the file is writable, false otherwise.

### PrecacheFile(string, string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/FileSystem/IGameFileSystem.cs#L83)

Precaches a file at the given file path and path ID.

```csharp
bool PrecacheFile(string filePath, string pathId)
```

#### Parameters

- **filePath**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The path to the file to precache.
- **pathId**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The ID of the path to precache the file in.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if the file was precached successfully, false otherwise.

### PrintSearchPaths()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/FileSystem/IGameFileSystem.cs#L8)

Prints the current search paths to the console.

```csharp
void PrintSearchPaths()
```

### ReadFile(string, string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/FileSystem/IGameFileSystem.cs#L58)

Reads the contents of a file at the given file path and path ID.

```csharp
string ReadFile(string filePath, string pathId)
```

#### Parameters

- **filePath**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The path to the file to read.
- **pathId**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The ID of the path to read the file from.

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string) - The contents of the file as a string.

### RemoveSearchPath(string, string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/FileSystem/IGameFileSystem.cs#L24)

Removes a search path from the file system.

```csharp
bool RemoveSearchPath(string path, string pathId)
```

#### Parameters

- **path**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The path to remove.
- **pathId**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The ID of the path to remove in.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if the path was removed successfully, false otherwise.

### SetFileWritable(string, string, bool)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/FileSystem/IGameFileSystem.cs#L100)

Sets the writable status of a file at the given file path and path ID.

```csharp
bool SetFileWritable(string filePath, string pathId, bool writable)
```

#### Parameters

- **filePath**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The path to the file to set the writable status for.
- **pathId**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The ID of the path to set the writable status in.
- **writable**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True to make the file writable, false to make it read-only.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if the writable status was set successfully, false otherwise.

### WriteFile(string, string, string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/FileSystem/IGameFileSystem.cs#L67)

Writes content to a file at the given file path and path ID.

```csharp
bool WriteFile(string filePath, string pathId, string content)
```

#### Parameters

- **filePath**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The path to the file to write.
- **pathId**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The ID of the path to write the file to.
- **content**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The content to write to the file.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if the file was written successfully, false otherwise.

