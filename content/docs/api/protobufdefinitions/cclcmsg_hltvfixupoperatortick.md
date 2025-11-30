---
title: CCLCMsg_HltvFixupOperatorTick
---

# Interface CCLCMsg_HltvFixupOperatorTick

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCLCMsg_HltvFixupOperatorTick.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CCLCMsg_HltvFixupOperatorTick : ITypedProtobuf<CCLCMsg_HltvFixupOperatorTick>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CCLCMsg_HltvFixupOperatorTick>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### CameramanScoreboard

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCLCMsg_HltvFixupOperatorTick.cs#L28)

```csharp
bool CameramanScoreboard { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### EyeAngles

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCLCMsg_HltvFixupOperatorTick.cs#L22)

```csharp
QAngle EyeAngles { get; set; }
```

#### Property Value

- [QAngle](/docs/api/natives/qangle)

### ObserverMode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCLCMsg_HltvFixupOperatorTick.cs#L25)

```csharp
int ObserverMode { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ObserverTarget

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCLCMsg_HltvFixupOperatorTick.cs#L31)

```csharp
int ObserverTarget { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Origin

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCLCMsg_HltvFixupOperatorTick.cs#L19)

```csharp
Vector Origin { get; set; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### PropsData

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCLCMsg_HltvFixupOperatorTick.cs#L16)

```csharp
byte[] PropsData { get; set; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]

### Tick

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCLCMsg_HltvFixupOperatorTick.cs#L13)

```csharp
int Tick { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ViewOffset

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCLCMsg_HltvFixupOperatorTick.cs#L34)

```csharp
Vector ViewOffset { get; set; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

