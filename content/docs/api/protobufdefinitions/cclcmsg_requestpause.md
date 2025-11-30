---
title: CCLCMsg_RequestPause
---

# Interface CCLCMsg_RequestPause

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCLCMsg_RequestPause.cs#L9)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CCLCMsg_RequestPause : ITypedProtobuf<CCLCMsg_RequestPause>, INativeHandle, INetMessage<CCLCMsg_RequestPause>, IDisposable
```

#### Implements

- [ITypedProtobuf<CCLCMsg_RequestPause>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)
- [INetMessage<CCLCMsg_RequestPause>](/docs/api/netmessages/inetmessaget)
- [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Properties

### PauseGroup

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCLCMsg_RequestPause.cs#L21)

```csharp
int PauseGroup { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PauseType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCLCMsg_RequestPause.cs#L18)

```csharp
RequestPause_t PauseType { get; set; }
```

#### Property Value

- [RequestPause_t](/docs/api/protobufdefinitions/requestpause_t)

