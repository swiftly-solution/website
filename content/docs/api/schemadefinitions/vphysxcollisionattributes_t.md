---
title: VPhysXCollisionAttributes_t
---

# Interface VPhysXCollisionAttributes_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXCollisionAttributes_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface VPhysXCollisionAttributes_t : ISchemaClass<VPhysXCollisionAttributes_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<VPhysXCollisionAttributes_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### CollisionGroup

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXCollisionAttributes_t.cs#L18)

```csharp
ref uint CollisionGroup { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### CollisionGroupString

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXCollisionAttributes_t.cs#L26)

```csharp
string CollisionGroupString { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### InteractAs

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXCollisionAttributes_t.cs#L20)

```csharp
ref CUtlVector<uint> InteractAs { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### InteractAsStrings

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXCollisionAttributes_t.cs#L28)

```csharp
ref CUtlVector<CUtlString> InteractAsStrings { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CUtlString](/docs/api/natives/cutlstring)>

### InteractExclude

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXCollisionAttributes_t.cs#L24)

```csharp
ref CUtlVector<uint> InteractExclude { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### InteractExcludeStrings

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXCollisionAttributes_t.cs#L32)

```csharp
ref CUtlVector<CUtlString> InteractExcludeStrings { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CUtlString](/docs/api/natives/cutlstring)>

### InteractWith

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXCollisionAttributes_t.cs#L22)

```csharp
ref CUtlVector<uint> InteractWith { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### InteractWithStrings

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXCollisionAttributes_t.cs#L30)

```csharp
ref CUtlVector<CUtlString> InteractWithStrings { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CUtlString](/docs/api/natives/cutlstring)>

