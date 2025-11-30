---
title: CCLCMsg_HltvReplay
---

# Interface CCLCMsg_HltvReplay

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCLCMsg_HltvReplay.cs#L9)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CCLCMsg_HltvReplay : ITypedProtobuf<CCLCMsg_HltvReplay>, INativeHandle, INetMessage<CCLCMsg_HltvReplay>, IDisposable
```

#### Implements

- [ITypedProtobuf<CCLCMsg_HltvReplay>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)
- [INetMessage<CCLCMsg_HltvReplay>](/docs/api/netmessages/inetmessaget)
- [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Properties

### EventTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCLCMsg_HltvReplay.cs#L30)

```csharp
float EventTime { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### PrimaryTarget

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCLCMsg_HltvReplay.cs#L27)

```csharp
int PrimaryTarget { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Request

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCLCMsg_HltvReplay.cs#L18)

```csharp
int Request { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SlowdownLength

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCLCMsg_HltvReplay.cs#L21)

```csharp
float SlowdownLength { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### SlowdownRate

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCLCMsg_HltvReplay.cs#L24)

```csharp
float SlowdownRate { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

