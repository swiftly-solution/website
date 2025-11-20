---
title: CSprite
---

```csharp
public interface CSprite : CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CSprite>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AttachedToEntity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSprite.cs#L20)

```csharp
ref CHandle<CBaseEntity> AttachedToEntity { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

### Attachment

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSprite.cs#L22)

```csharp
AttachmentHandle_t Attachment { get; }
```

#### Property Value

- [AttachmentHandle_t](/docs/api/shared/schemadefinitions/attachmenthandle_t)

### Brightness

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSprite.cs#L30)

```csharp
ref uint Brightness { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### BrightnessDuration

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSprite.cs#L32)

```csharp
ref float BrightnessDuration { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### BrightnessTimeStart

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSprite.cs#L58)

```csharp
GameTime_t BrightnessTimeStart { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### DestBrightness

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSprite.cs#L56)

```csharp
ref int DestBrightness { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DestScale

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSprite.cs#L50)

```csharp
ref float DestScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DieTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSprite.cs#L28)

```csharp
GameTime_t DieTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### Frame

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSprite.cs#L26)

```csharp
ref float Frame { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### GlowProxySize

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSprite.cs#L40)

```csharp
ref float GlowProxySize { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### HDRColorScale

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSprite.cs#L42)

```csharp
ref float HDRColorScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LastTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSprite.cs#L44)

```csharp
GameTime_t LastTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### MaxFrame

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSprite.cs#L46)

```csharp
ref float MaxFrame { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### ScaleDuration

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSprite.cs#L36)

```csharp
ref float ScaleDuration { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### ScaleTimeStart

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSprite.cs#L52)

```csharp
GameTime_t ScaleTimeStart { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### SpriteFramerate

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSprite.cs#L24)

```csharp
ref float SpriteFramerate { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### SpriteHeight

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSprite.cs#L62)

```csharp
ref int SpriteHeight { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SpriteMaterial

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSprite.cs#L18)

```csharp
ref CStrongHandle<InfoForResourceTypeIMaterial2> SpriteMaterial { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeIMaterial2](/docs/api/shared/schemadefinitions/infoforresourcetypeimaterial2)>

### SpriteScale

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSprite.cs#L34)

```csharp
ref float SpriteScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### SpriteWidth

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSprite.cs#L60)

```csharp
ref int SpriteWidth { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### StartBrightness

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSprite.cs#L54)

```csharp
ref int StartBrightness { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### StartScale

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSprite.cs#L48)

```csharp
ref float StartScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### WorldSpaceScale

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSprite.cs#L38)

```csharp
ref bool WorldSpaceScale { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### AttachedToEntityUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSprite.cs#L65)

```csharp
void AttachedToEntityUpdated()
```

### AttachmentUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSprite.cs#L66)

```csharp
void AttachmentUpdated()
```

### BrightnessDurationUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSprite.cs#L70)

```csharp
void BrightnessDurationUpdated()
```

### BrightnessUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSprite.cs#L69)

```csharp
void BrightnessUpdated()
```

### FrameUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSprite.cs#L68)

```csharp
void FrameUpdated()
```

### GlowProxySizeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSprite.cs#L74)

```csharp
void GlowProxySizeUpdated()
```

### HDRColorScaleUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSprite.cs#L75)

```csharp
void HDRColorScaleUpdated()
```

### ScaleDurationUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSprite.cs#L72)

```csharp
void ScaleDurationUpdated()
```

### SpriteFramerateUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSprite.cs#L67)

```csharp
void SpriteFramerateUpdated()
```

### SpriteMaterialUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSprite.cs#L64)

```csharp
void SpriteMaterialUpdated()
```

### SpriteScaleUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSprite.cs#L71)

```csharp
void SpriteScaleUpdated()
```

### WorldSpaceScaleUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSprite.cs#L73)

```csharp
void WorldSpaceScaleUpdated()
```

