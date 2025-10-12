---
title: VPhysXCollisionAttributes_t
---

```csharp
public interface VPhysXCollisionAttributes_t : ISchemaClass<VPhysXCollisionAttributes_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### CollisionGroup

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXCollisionAttributes_t.cs#L16)

```csharp
ref uint CollisionGroup { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### CollisionGroupString

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXCollisionAttributes_t.cs#L24)

```csharp
string CollisionGroupString { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### InteractAs

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXCollisionAttributes_t.cs#L18)

```csharp
ref CUtlVector<uint> InteractAs { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### InteractAsStrings

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXCollisionAttributes_t.cs#L26)

```csharp
ref CUtlVector<CUtlString> InteractAsStrings { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CUtlString](/docs/api/shared/natives/cutlstring)>

### InteractExclude

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXCollisionAttributes_t.cs#L22)

```csharp
ref CUtlVector<uint> InteractExclude { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### InteractExcludeStrings

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXCollisionAttributes_t.cs#L30)

```csharp
ref CUtlVector<CUtlString> InteractExcludeStrings { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CUtlString](/docs/api/shared/natives/cutlstring)>

### InteractWith

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXCollisionAttributes_t.cs#L20)

```csharp
ref CUtlVector<uint> InteractWith { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### InteractWithStrings

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXCollisionAttributes_t.cs#L28)

```csharp
ref CUtlVector<CUtlString> InteractWithStrings { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CUtlString](/docs/api/shared/natives/cutlstring)>

