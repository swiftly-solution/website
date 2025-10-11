---
title: EventBreakProp
---

```csharp
public interface EventBreakProp : IGameEvent<EventBreakProp>
```

#### Implements

## Properties

### **EntIndex** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventBreakProp.cs#L21)

```csharp
int EntIndex { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **PlayerDropped** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventBreakProp.cs#L57)

```csharp
bool PlayerDropped { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **PlayerHeld** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventBreakProp.cs#L47)

```csharp
bool PlayerHeld { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **PlayerThrown** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventBreakProp.cs#L52)

```csharp
bool PlayerThrown { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **UserId** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventBreakProp.cs#L42)

```csharp
int UserId { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **UserIdController** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventBreakProp.cs#L27)

```csharp
CCSPlayerController UserIdController { get; }
```

#### Property Value

- [CCSPlayerController](/docs/api/shared/schemadefinitions/ccsplayercontroller)

### **UserIdPawn** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventBreakProp.cs#L33)

```csharp
CCSPlayerPawn UserIdPawn { get; }
```

#### Property Value

- [CCSPlayerPawn](/docs/api/shared/schemadefinitions/ccsplayerpawn)

### **UserIdPlayer** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventBreakProp.cs#L36)

```csharp
IPlayer UserIdPlayer { get; }
```

#### Property Value

- [IPlayer](/docs/api/shared/players/iplayer)

