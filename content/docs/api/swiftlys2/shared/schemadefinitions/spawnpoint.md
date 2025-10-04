---
title: SpawnPoint
---

```csharp
public interface SpawnPoint : CServerOnlyPointEntity, CServerOnlyEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CServerOnlyEntity>, ISchemaClass<CServerOnlyPointEntity>, ISchemaClass<SpawnPoint>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**Enabled** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SpawnPoint.cs#L18)

```csharp
ref bool Enabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**Priority** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SpawnPoint.cs#L16)

```csharp
ref int Priority { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**Type** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SpawnPoint.cs#L20)

```csharp
ref int Type { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

