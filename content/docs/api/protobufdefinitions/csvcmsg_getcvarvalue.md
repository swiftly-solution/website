---
title: CSVCMsg_GetCvarValue
---

# Interface CSVCMsg_GetCvarValue

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_GetCvarValue.cs#L9)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CSVCMsg_GetCvarValue : ITypedProtobuf<CSVCMsg_GetCvarValue>, INativeHandle, INetMessage<CSVCMsg_GetCvarValue>, IDisposable
```

#### Implements

- [ITypedProtobuf<CSVCMsg_GetCvarValue>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)
- [INetMessage<CSVCMsg_GetCvarValue>](/docs/api/netmessages/inetmessaget)
- [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Properties

### Cookie

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_GetCvarValue.cs#L18)

```csharp
int Cookie { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CvarName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_GetCvarValue.cs#L21)

```csharp
string CvarName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

