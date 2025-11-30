---
title: CMsgSource2VProfLiteReport
---

# Interface CMsgSource2VProfLiteReport

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSource2VProfLiteReport.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CMsgSource2VProfLiteReport : ITypedProtobuf<CMsgSource2VProfLiteReport>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CMsgSource2VProfLiteReport>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### DiscardedFrames

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSource2VProfLiteReport.cs#L19)

```csharp
uint DiscardedFrames { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Items

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSource2VProfLiteReport.cs#L16)

```csharp
IProtobufRepeatedFieldSubMessageType<CMsgSource2VProfLiteReportItem> Items { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[CMsgSource2VProfLiteReportItem](/docs/api/protobufdefinitions/cmsgsource2vproflitereportitem)>

### Total

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSource2VProfLiteReport.cs#L13)

```csharp
CMsgSource2VProfLiteReportItem Total { get; }
```

#### Property Value

- [CMsgSource2VProfLiteReportItem](/docs/api/protobufdefinitions/cmsgsource2vproflitereportitem)

