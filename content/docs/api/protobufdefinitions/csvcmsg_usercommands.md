---
title: CSVCMsg_UserCommands
---

# Interface CSVCMsg_UserCommands

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_UserCommands.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CSVCMsg_UserCommands : ITypedProtobuf<CSVCMsg_UserCommands>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CSVCMsg_UserCommands>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Commands

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_UserCommands.cs#L13)

```csharp
IProtobufRepeatedFieldSubMessageType<CMsgServerUserCmd> Commands { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[CMsgServerUserCmd](/docs/api/protobufdefinitions/cmsgserverusercmd)>

