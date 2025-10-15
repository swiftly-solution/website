---
title: CSVCMsg_SplitScreen
---

```csharp
public interface CSVCMsg_SplitScreen : ITypedProtobuf<CSVCMsg_SplitScreen>, INativeHandle, INetMessage<CSVCMsg_SplitScreen>, IDisposable
```

#### Implements

## Properties

### PlayerIndex

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_SplitScreen.cs#L24)

```csharp
int PlayerIndex { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Slot

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_SplitScreen.cs#L21)

```csharp
int Slot { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Type

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_SplitScreen.cs#L18)

```csharp
ESplitScreenMessageType Type { get; set; }
```

#### Property Value

- [ESplitScreenMessageType](/docs/api/shared/protobufdefinitions/esplitscreenmessagetype)

