---
title: CBaseUserCmdPB
---

# Interface CBaseUserCmdPB

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CBaseUserCmdPB.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CBaseUserCmdPB : ITypedProtobuf<CBaseUserCmdPB>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CBaseUserCmdPB>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### ButtonsPb

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CBaseUserCmdPB.cs#L22)

```csharp
CInButtonStatePB ButtonsPb { get; }
```

#### Property Value

- [CInButtonStatePB](/docs/api/protobufdefinitions/cinbuttonstatepb)

### ClientTick

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CBaseUserCmdPB.cs#L16)

```csharp
int ClientTick { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CmdFlags

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CBaseUserCmdPB.cs#L64)

```csharp
int CmdFlags { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ConsumedServerAngleChanges

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CBaseUserCmdPB.cs#L61)

```csharp
uint ConsumedServerAngleChanges { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Forwardmove

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CBaseUserCmdPB.cs#L28)

```csharp
float Forwardmove { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Impulse

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CBaseUserCmdPB.cs#L37)

```csharp
int Impulse { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Leftmove

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CBaseUserCmdPB.cs#L31)

```csharp
float Leftmove { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LegacyCommandNumber

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CBaseUserCmdPB.cs#L13)

```csharp
int LegacyCommandNumber { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Mousedx

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CBaseUserCmdPB.cs#L46)

```csharp
int Mousedx { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Mousedy

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CBaseUserCmdPB.cs#L49)

```csharp
int Mousedy { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MoveCrc

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CBaseUserCmdPB.cs#L58)

```csharp
byte[] MoveCrc { get; set; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]

### PawnEntityHandle

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CBaseUserCmdPB.cs#L52)

```csharp
uint PawnEntityHandle { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### PredictionOffsetTicksX256

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CBaseUserCmdPB.cs#L19)

```csharp
uint PredictionOffsetTicksX256 { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### RandomSeed

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CBaseUserCmdPB.cs#L43)

```csharp
int RandomSeed { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SubtickMoves

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CBaseUserCmdPB.cs#L55)

```csharp
IProtobufRepeatedFieldSubMessageType<CSubtickMoveStep> SubtickMoves { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[CSubtickMoveStep](/docs/api/protobufdefinitions/csubtickmovestep)>

### Upmove

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CBaseUserCmdPB.cs#L34)

```csharp
float Upmove { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Viewangles

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CBaseUserCmdPB.cs#L25)

```csharp
QAngle Viewangles { get; set; }
```

#### Property Value

- [QAngle](/docs/api/natives/qangle)

### Weaponselect

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CBaseUserCmdPB.cs#L40)

```csharp
int Weaponselect { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

