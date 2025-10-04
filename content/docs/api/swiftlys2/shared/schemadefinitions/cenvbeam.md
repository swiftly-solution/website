---
title: CEnvBeam
---

```csharp
public interface CEnvBeam : CBeam, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBeam>, ISchemaClass<CEnvBeam>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**Active** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvBeam.cs#L16)

```csharp
ref int Active { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**BoltWidth** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvBeam.cs#L26)

```csharp
ref float BoltWidth { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**Decal** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvBeam.cs#L50)

```csharp
string Decal { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

**EndEntity** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvBeam.cs#L22)

```csharp
string EndEntity { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

**EndPointRelative** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvBeam.cs#L40)

```csharp
ref Vector EndPointRelative { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

**EndPointWorld** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvBeam.cs#L38)

```csharp
ref Vector EndPointWorld { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

**Filter** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvBeam.cs#L48)

```csharp
ref CHandle<CBaseEntity> Filter { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

**FilterName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvBeam.cs#L46)

```csharp
string FilterName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

**FrameStart** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvBeam.cs#L36)

```csharp
ref int FrameStart { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**Life** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvBeam.cs#L24)

```csharp
ref float Life { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**NoiseAmplitude** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvBeam.cs#L28)

```csharp
ref float NoiseAmplitude { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**OnTouchedByEntity** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvBeam.cs#L52)

```csharp
CEntityIOOutput OnTouchedByEntity { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

**Radius** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvBeam.cs#L42)

```csharp
ref float Radius { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**Restrike** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvBeam.cs#L32)

```csharp
ref float Restrike { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**Speed** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvBeam.cs#L30)

```csharp
ref int Speed { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**SpriteName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvBeam.cs#L34)

```csharp
string SpriteName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

**SpriteTexture** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvBeam.cs#L18)

```csharp
ref CStrongHandle<InfoForResourceTypeIMaterial2> SpriteTexture { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeIMaterial2](/docs/api/shared/schemadefinitions/infoforresourcetypeimaterial2)>

**StartEntity** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvBeam.cs#L20)

```csharp
string StartEntity { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

**TouchType** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvBeam.cs#L44)

```csharp
ref Touch_t TouchType { get; }
```

#### Property Value

- [Touch_t](/docs/api/shared/schemadefinitions/touch_t)

