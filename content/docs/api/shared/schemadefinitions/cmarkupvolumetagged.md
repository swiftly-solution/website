---
title: CMarkupVolumeTagged
---

```csharp
public interface CMarkupVolumeTagged : CMarkupVolume, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CMarkupVolume>, ISchemaClass<CMarkupVolumeTagged>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### GroupByPrefab

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMarkupVolumeTagged.cs#L23)

```csharp
ref bool GroupByPrefab { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GroupByVolume

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMarkupVolumeTagged.cs#L25)

```csharp
ref bool GroupByVolume { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GroupNames

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMarkupVolumeTagged.cs#L17)

```csharp
ref CUtlVector<CGlobalSymbol> GroupNames { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CGlobalSymbol](/docs/api/shared/natives/cglobalsymbol)>

### GroupOtherGroups

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMarkupVolumeTagged.cs#L27)

```csharp
ref bool GroupOtherGroups { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsGroup

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMarkupVolumeTagged.cs#L21)

```csharp
ref bool IsGroup { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsInGroup

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMarkupVolumeTagged.cs#L29)

```csharp
ref bool IsInGroup { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Tags

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMarkupVolumeTagged.cs#L19)

```csharp
ref CUtlVector<CGlobalSymbol> Tags { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CGlobalSymbol](/docs/api/shared/natives/cglobalsymbol)>

