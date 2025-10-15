---
title: CEnvBeam
---

```csharp
public interface CEnvBeam : CBeam, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBeam>, ISchemaClass<CEnvBeam>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Active

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvBeam.cs#L17)

```csharp
ref int Active { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### BoltWidth

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvBeam.cs#L27)

```csharp
ref float BoltWidth { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Decal

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvBeam.cs#L51)

```csharp
string Decal { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### EndEntity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvBeam.cs#L23)

```csharp
string EndEntity { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### EndPointRelative

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvBeam.cs#L41)

```csharp
ref Vector EndPointRelative { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### EndPointWorld

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvBeam.cs#L39)

```csharp
ref Vector EndPointWorld { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### Filter

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvBeam.cs#L49)

```csharp
ref CHandle<CBaseEntity> Filter { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

### FilterName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvBeam.cs#L47)

```csharp
string FilterName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### FrameStart

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvBeam.cs#L37)

```csharp
ref int FrameStart { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Life

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvBeam.cs#L25)

```csharp
ref float Life { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### NoiseAmplitude

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvBeam.cs#L29)

```csharp
ref float NoiseAmplitude { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### OnTouchedByEntity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvBeam.cs#L53)

```csharp
CEntityIOOutput OnTouchedByEntity { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### Radius

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvBeam.cs#L43)

```csharp
ref float Radius { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Restrike

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvBeam.cs#L33)

```csharp
ref float Restrike { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Speed

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvBeam.cs#L31)

```csharp
ref int Speed { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SpriteName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvBeam.cs#L35)

```csharp
string SpriteName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### SpriteTexture

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvBeam.cs#L19)

```csharp
ref CStrongHandle<InfoForResourceTypeIMaterial2> SpriteTexture { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeIMaterial2](/docs/api/shared/schemadefinitions/infoforresourcetypeimaterial2)>

### StartEntity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvBeam.cs#L21)

```csharp
string StartEntity { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### TouchType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvBeam.cs#L45)

```csharp
ref Touch_t TouchType { get; }
```

#### Property Value

- [Touch_t](/docs/api/shared/schemadefinitions/touch_t)

