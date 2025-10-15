---
title: CCSUsrMsg_HudMsg
---

```csharp
public interface CCSUsrMsg_HudMsg : ITypedProtobuf<CCSUsrMsg_HudMsg>, INativeHandle, INetMessage<CCSUsrMsg_HudMsg>, IDisposable
```

#### Implements

## Properties

### Channel

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_HudMsg.cs#L18)

```csharp
int Channel { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Clr1

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_HudMsg.cs#L24)

```csharp
Color Clr1 { get; set; }
```

#### Property Value

- [Color](/docs/api/shared/natives/color)

### Clr2

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_HudMsg.cs#L27)

```csharp
Color Clr2 { get; set; }
```

#### Property Value

- [Color](/docs/api/shared/natives/color)

### Effect

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_HudMsg.cs#L30)

```csharp
int Effect { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### FadeInTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_HudMsg.cs#L33)

```csharp
float FadeInTime { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FadeOutTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_HudMsg.cs#L36)

```csharp
float FadeOutTime { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FxTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_HudMsg.cs#L42)

```csharp
float FxTime { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### HoldTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_HudMsg.cs#L39)

```csharp
float HoldTime { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Pos

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_HudMsg.cs#L21)

```csharp
Vector2D Pos { get; set; }
```

#### Property Value

- [Vector2D](/docs/api/shared/natives/vector2d)

### Text

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_HudMsg.cs#L45)

```csharp
string Text { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

