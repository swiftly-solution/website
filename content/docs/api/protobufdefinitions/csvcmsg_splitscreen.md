---
title: CSVCMsg_SplitScreen
---

# Interface CSVCMsg_SplitScreen

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_SplitScreen.cs#L9)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CSVCMsg_SplitScreen : ITypedProtobuf<CSVCMsg_SplitScreen>, INativeHandle, INetMessage<CSVCMsg_SplitScreen>, IDisposable
```

#### Implements

- [ITypedProtobuf<CSVCMsg_SplitScreen>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)
- [INetMessage<CSVCMsg_SplitScreen>](/docs/api/netmessages/inetmessaget)
- [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Properties

### PlayerIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_SplitScreen.cs#L24)

```csharp
int PlayerIndex { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Slot

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_SplitScreen.cs#L21)

```csharp
int Slot { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Type

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_SplitScreen.cs#L18)

```csharp
ESplitScreenMessageType Type { get; set; }
```

#### Property Value

- [ESplitScreenMessageType](/docs/api/protobufdefinitions/esplitscreenmessagetype)

