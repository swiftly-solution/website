---
title: CCLCMsg_RequestPause
---

```csharp
public interface CCLCMsg_RequestPause : ITypedProtobuf<CCLCMsg_RequestPause>, INativeHandle, INetMessage<CCLCMsg_RequestPause>, IDisposable
```

#### Implements

## Properties

### PauseGroup

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCLCMsg_RequestPause.cs#L21)

```csharp
int PauseGroup { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PauseType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCLCMsg_RequestPause.cs#L18)

```csharp
RequestPause_t PauseType { get; set; }
```

#### Property Value

- [RequestPause_t](/docs/api/shared/protobufdefinitions/requestpause_t)

