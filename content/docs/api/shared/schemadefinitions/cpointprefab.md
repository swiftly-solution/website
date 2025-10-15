---
title: CPointPrefab
---

```csharp
public interface CPointPrefab : CServerOnlyPointEntity, CServerOnlyEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CServerOnlyEntity>, ISchemaClass<CServerOnlyPointEntity>, ISchemaClass<CPointPrefab>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AssociatedRelayEntity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointPrefab.cs#L27)

```csharp
ref CHandle<CPointPrefab> AssociatedRelayEntity { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CPointPrefab](/docs/api/shared/schemadefinitions/cpointprefab)>

### AssociatedRelayTargetName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointPrefab.cs#L21)

```csharp
string AssociatedRelayTargetName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### FixupNames

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointPrefab.cs#L23)

```csharp
ref bool FixupNames { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ForceWorldGroupID

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointPrefab.cs#L19)

```csharp
string ForceWorldGroupID { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### LoadDynamic

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointPrefab.cs#L25)

```csharp
ref bool LoadDynamic { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TargetMapName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointPrefab.cs#L17)

```csharp
string TargetMapName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

