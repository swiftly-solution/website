---
title: CNETMsg_StringCmd
---

# Interface CNETMsg_StringCmd

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CNETMsg_StringCmd.cs#L9)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CNETMsg_StringCmd : ITypedProtobuf<CNETMsg_StringCmd>, INativeHandle, INetMessage<CNETMsg_StringCmd>, IDisposable
```

#### Implements

- [ITypedProtobuf<CNETMsg_StringCmd>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)
- [INetMessage<CNETMsg_StringCmd>](/docs/api/netmessages/inetmessaget)
- [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Properties

### Command

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CNETMsg_StringCmd.cs#L18)

```csharp
string Command { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### PredictionSync

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CNETMsg_StringCmd.cs#L21)

```csharp
uint PredictionSync { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

