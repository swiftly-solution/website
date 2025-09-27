---
title: CMsgSource2VProfLiteReport
---

```csharp
public interface CMsgSource2VProfLiteReport : ITypedProtobuf<CMsgSource2VProfLiteReport>, INativeHandle
```

#### Implements

## Properties

**DiscardedFrames** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSource2VProfLiteReport.cs#L19)

```csharp
uint DiscardedFrames { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**Items** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSource2VProfLiteReport.cs#L16)

```csharp
IProtobufRepeatedFieldSubMessageType<CMsgSource2VProfLiteReportItem> Items { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[CMsgSource2VProfLiteReportItem](/docs/api/shared/protobufdefinitions/cmsgsource2vproflitereportitem)>

**Total** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSource2VProfLiteReport.cs#L13)

```csharp
CMsgSource2VProfLiteReportItem Total { get; }
```

#### Property Value

- [CMsgSource2VProfLiteReportItem](/docs/api/shared/protobufdefinitions/cmsgsource2vproflitereportitem)

