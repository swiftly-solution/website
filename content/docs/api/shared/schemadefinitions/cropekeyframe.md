---
title: CRopeKeyframe
---

```csharp
public interface CRopeKeyframe : CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CRopeKeyframe>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### ChangeCount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRopeKeyframe.cs#L37)

```csharp
ref byte ChangeCount { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### ConstrainBetweenEndpoints

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRopeKeyframe.cs#L29)

```csharp
ref bool ConstrainBetweenEndpoints { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CreatedFromMapFile

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRopeKeyframe.cs#L43)

```csharp
ref bool CreatedFromMapFile { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### EndAttachment

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRopeKeyframe.cs#L57)

```csharp
AttachmentHandle_t EndAttachment { get; }
```

#### Property Value

- [AttachmentHandle_t](/docs/api/shared/schemadefinitions/attachmenthandle_t)

### EndPoint

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRopeKeyframe.cs#L53)

```csharp
ref CHandle<CBaseEntity> EndPoint { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

### EndPointValid

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRopeKeyframe.cs#L49)

```csharp
ref bool EndPointValid { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LockedPoints

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRopeKeyframe.cs#L41)

```csharp
ref byte LockedPoints { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### NextLinkName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRopeKeyframe.cs#L19)

```csharp
string NextLinkName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### RopeFlags

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRopeKeyframe.cs#L17)

```csharp
ref ushort RopeFlags { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### RopeLength

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRopeKeyframe.cs#L39)

```csharp
ref short RopeLength { get; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### RopeMaterialModelIndex

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRopeKeyframe.cs#L33)

```csharp
ref CStrongHandle<InfoForResourceTypeIMaterial2> RopeMaterialModelIndex { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeIMaterial2](/docs/api/shared/schemadefinitions/infoforresourcetypeimaterial2)>

### ScrollSpeed

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRopeKeyframe.cs#L45)

```csharp
ref float ScrollSpeed { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Segments

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRopeKeyframe.cs#L27)

```csharp
ref byte Segments { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### Slack

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRopeKeyframe.cs#L21)

```csharp
ref short Slack { get; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### StartAttachment

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRopeKeyframe.cs#L55)

```csharp
AttachmentHandle_t StartAttachment { get; }
```

#### Property Value

- [AttachmentHandle_t](/docs/api/shared/schemadefinitions/attachmenthandle_t)

### StartPoint

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRopeKeyframe.cs#L51)

```csharp
ref CHandle<CBaseEntity> StartPoint { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

### StartPointValid

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRopeKeyframe.cs#L47)

```csharp
ref bool StartPointValid { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### StrRopeMaterialModel

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRopeKeyframe.cs#L31)

```csharp
string StrRopeMaterialModel { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Subdiv

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRopeKeyframe.cs#L35)

```csharp
ref byte Subdiv { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### TextureScale

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRopeKeyframe.cs#L25)

```csharp
ref float TextureScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Width

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRopeKeyframe.cs#L23)

```csharp
ref float Width { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

## Methods

### ChangeCountUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRopeKeyframe.cs#L67)

```csharp
void ChangeCountUpdated()
```

### ConstrainBetweenEndpointsUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRopeKeyframe.cs#L64)

```csharp
void ConstrainBetweenEndpointsUpdated()
```

### EndAttachmentUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRopeKeyframe.cs#L74)

```csharp
void EndAttachmentUpdated()
```

### EndPointUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRopeKeyframe.cs#L72)

```csharp
void EndPointUpdated()
```

### LockedPointsUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRopeKeyframe.cs#L69)

```csharp
void LockedPointsUpdated()
```

### RopeFlagsUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRopeKeyframe.cs#L59)

```csharp
void RopeFlagsUpdated()
```

### RopeLengthUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRopeKeyframe.cs#L68)

```csharp
void RopeLengthUpdated()
```

### RopeMaterialModelIndexUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRopeKeyframe.cs#L65)

```csharp
void RopeMaterialModelIndexUpdated()
```

### ScrollSpeedUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRopeKeyframe.cs#L70)

```csharp
void ScrollSpeedUpdated()
```

### SegmentsUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRopeKeyframe.cs#L63)

```csharp
void SegmentsUpdated()
```

### SlackUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRopeKeyframe.cs#L60)

```csharp
void SlackUpdated()
```

### StartAttachmentUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRopeKeyframe.cs#L73)

```csharp
void StartAttachmentUpdated()
```

### StartPointUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRopeKeyframe.cs#L71)

```csharp
void StartPointUpdated()
```

### SubdivUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRopeKeyframe.cs#L66)

```csharp
void SubdivUpdated()
```

### TextureScaleUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRopeKeyframe.cs#L62)

```csharp
void TextureScaleUpdated()
```

### WidthUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRopeKeyframe.cs#L61)

```csharp
void WidthUpdated()
```

