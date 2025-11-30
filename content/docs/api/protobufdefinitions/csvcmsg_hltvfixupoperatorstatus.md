---
title: CSVCMsg_HltvFixupOperatorStatus
---

# Interface CSVCMsg_HltvFixupOperatorStatus

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_HltvFixupOperatorStatus.cs#L9)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CSVCMsg_HltvFixupOperatorStatus : ITypedProtobuf<CSVCMsg_HltvFixupOperatorStatus>, INativeHandle, INetMessage<CSVCMsg_HltvFixupOperatorStatus>, IDisposable
```

#### Implements

- [ITypedProtobuf<CSVCMsg_HltvFixupOperatorStatus>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)
- [INetMessage<CSVCMsg_HltvFixupOperatorStatus>](/docs/api/netmessages/inetmessaget)
- [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Properties

### Mode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_HltvFixupOperatorStatus.cs#L18)

```csharp
uint Mode { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### OverrideOperatorName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_HltvFixupOperatorStatus.cs#L21)

```csharp
string OverrideOperatorName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

