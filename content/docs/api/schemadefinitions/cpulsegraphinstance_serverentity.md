---
title: CPulseGraphInstance_ServerEntity
---

# Interface CPulseGraphInstance_ServerEntity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphInstance_ServerEntity.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CPulseGraphInstance_ServerEntity : CBasePulseGraphInstance, ISchemaClass<CBasePulseGraphInstance>, ISchemaClass<CPulseGraphInstance_ServerEntity>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CBasePulseGraphInstance](/docs/api/schemadefinitions/cbasepulsegraphinstance)
- [ISchemaClass<CBasePulseGraphInstance>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CPulseGraphInstance_ServerEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Activated

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphInstance_ServerEntity.cs#L20)

```csharp
ref bool Activated { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### NameFixupLocal

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphInstance_ServerEntity.cs#L26)

```csharp
string NameFixupLocal { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### NameFixupParent

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphInstance_ServerEntity.cs#L24)

```csharp
string NameFixupParent { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### NameFixupStaticPrefix

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphInstance_ServerEntity.cs#L22)

```csharp
string NameFixupStaticPrefix { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Owner

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphInstance_ServerEntity.cs#L18)

```csharp
ref CHandle<CBaseEntity> Owner { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CBaseEntity](/docs/api/schemadefinitions/cbaseentity)>

### ProceduralWorldNameForRelays

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphInstance_ServerEntity.cs#L28)

```csharp
string ProceduralWorldNameForRelays { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

