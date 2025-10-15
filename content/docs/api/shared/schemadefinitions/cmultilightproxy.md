---
title: CMultiLightProxy
---

```csharp
public interface CMultiLightProxy : CLogicalEntity, CServerOnlyEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CServerOnlyEntity>, ISchemaClass<CLogicalEntity>, ISchemaClass<CMultiLightProxy>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### BrightnessDelta

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMultiLightProxy.cs#L23)

```csharp
ref float BrightnessDelta { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### CurrentBrightnessMultiplier

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMultiLightProxy.cs#L29)

```csharp
ref float CurrentBrightnessMultiplier { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LightClassFilter

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMultiLightProxy.cs#L19)

```csharp
string LightClassFilter { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### LightNameFilter

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMultiLightProxy.cs#L17)

```csharp
string LightNameFilter { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### LightRadiusFilter

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMultiLightProxy.cs#L21)

```csharp
ref float LightRadiusFilter { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Lights

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMultiLightProxy.cs#L31)

```csharp
ref CUtlVector<CHandle<CLightEntity>> Lights { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CHandle](/docs/api/shared/natives/chandle-1)<[CLightEntity](/docs/api/shared/schemadefinitions/clightentity)>>

### PerformScreenFade

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMultiLightProxy.cs#L25)

```csharp
ref bool PerformScreenFade { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TargetBrightnessMultiplier

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMultiLightProxy.cs#L27)

```csharp
ref float TargetBrightnessMultiplier { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

