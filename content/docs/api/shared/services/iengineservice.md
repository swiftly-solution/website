---
title: IEngineService
---

```csharp
public interface IEngineService
```

## Properties

### **CurrentTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Engine/IEngineService.cs#L36)

```csharp
float CurrentTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **Map** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Engine/IEngineService.cs#L13)

```csharp
string Map { get; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **MaxPlayers** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Engine/IEngineService.cs#L25)

```csharp
int MaxPlayers { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **ServerIP** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Engine/IEngineService.cs#L8)

```csharp
string ServerIP { get; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **TickCount** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Engine/IEngineService.cs#L41)

```csharp
int TickCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### **ExecuteCommand(string)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Engine/IEngineService.cs#L31)

```csharp
void ExecuteCommand(string command)
```

#### Parameters

- **command**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The command to execute. Cannot be null or empty.

### **IsMapValid(string)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Engine/IEngineService.cs#L20)

```csharp
bool IsMapValid(string map)
```

#### Parameters

- **map**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The map string to validate. It also supports Workshop ID.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - true if the map is valid; otherwise, false.

