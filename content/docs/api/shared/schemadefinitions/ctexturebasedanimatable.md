---
title: CTextureBasedAnimatable
---

```csharp
public interface CTextureBasedAnimatable : CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CTextureBasedAnimatable>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AnimationBoundsMax

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTextureBasedAnimatable.cs#L27)

```csharp
ref Vector AnimationBoundsMax { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### AnimationBoundsMin

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTextureBasedAnimatable.cs#L25)

```csharp
ref Vector AnimationBoundsMin { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### FPS

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTextureBasedAnimatable.cs#L19)

```csharp
ref float FPS { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Loop

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTextureBasedAnimatable.cs#L17)

```csharp
ref bool Loop { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### PositionKeys

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTextureBasedAnimatable.cs#L21)

```csharp
ref CStrongHandle<InfoForResourceTypeCTextureBase> PositionKeys { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeCTextureBase](/docs/api/shared/schemadefinitions/infoforresourcetypectexturebase)>

### RotationKeys

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTextureBasedAnimatable.cs#L23)

```csharp
ref CStrongHandle<InfoForResourceTypeCTextureBase> RotationKeys { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeCTextureBase](/docs/api/shared/schemadefinitions/infoforresourcetypectexturebase)>

### StartFrame

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTextureBasedAnimatable.cs#L31)

```csharp
ref float StartFrame { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### StartTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTextureBasedAnimatable.cs#L29)

```csharp
ref float StartTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

## Methods

### AnimationBoundsMaxUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTextureBasedAnimatable.cs#L38)

```csharp
void AnimationBoundsMaxUpdated()
```

### AnimationBoundsMinUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTextureBasedAnimatable.cs#L37)

```csharp
void AnimationBoundsMinUpdated()
```

### FPSUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTextureBasedAnimatable.cs#L34)

```csharp
void FPSUpdated()
```

### LoopUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTextureBasedAnimatable.cs#L33)

```csharp
void LoopUpdated()
```

### PositionKeysUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTextureBasedAnimatable.cs#L35)

```csharp
void PositionKeysUpdated()
```

### RotationKeysUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTextureBasedAnimatable.cs#L36)

```csharp
void RotationKeysUpdated()
```

### StartFrameUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTextureBasedAnimatable.cs#L40)

```csharp
void StartFrameUpdated()
```

### StartTimeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTextureBasedAnimatable.cs#L39)

```csharp
void StartTimeUpdated()
```

