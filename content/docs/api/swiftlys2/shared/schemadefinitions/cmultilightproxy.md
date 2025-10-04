---
title: CMultiLightProxy
---

```csharp
public interface CMultiLightProxy : CLogicalEntity, CServerOnlyEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CServerOnlyEntity>, ISchemaClass<CLogicalEntity>, ISchemaClass<CMultiLightProxy>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**BrightnessDelta** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMultiLightProxy.cs#L22)

```csharp
ref float BrightnessDelta { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**CurrentBrightnessMultiplier** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMultiLightProxy.cs#L28)

```csharp
ref float CurrentBrightnessMultiplier { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**LightClassFilter** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMultiLightProxy.cs#L18)

```csharp
string LightClassFilter { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

**LightNameFilter** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMultiLightProxy.cs#L16)

```csharp
string LightNameFilter { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

**LightRadiusFilter** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMultiLightProxy.cs#L20)

```csharp
ref float LightRadiusFilter { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**Lights** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMultiLightProxy.cs#L30)

```csharp
ref CUtlVector<CHandle<CLightEntity>> Lights { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector-1)<[CHandle](/docs/api/shared/natives/chandle-1)<[CLightEntity](/docs/api/shared/schemadefinitions/clightentity)>>

**PerformScreenFade** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMultiLightProxy.cs#L24)

```csharp
ref bool PerformScreenFade { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**TargetBrightnessMultiplier** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMultiLightProxy.cs#L26)

```csharp
ref float TargetBrightnessMultiplier { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

