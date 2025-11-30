---
title: CEntityIdentity
---

# Interface CEntityIdentity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityIdentity.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CEntityIdentity : ISchemaClass<CEntityIdentity>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CEntityIdentity>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### DataObjectTypes

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityIdentity.cs#L28)

```csharp
ref uint DataObjectTypes { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### DesignerName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityIdentity.cs#L22)

```csharp
string DesignerName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### EntityHandle

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CEntityIdentity.cs#L8)

```csharp
CHandle<CEntityInstance> EntityHandle { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CEntityInstance](/docs/api/schemadefinitions/centityinstance)>

### EntityInstance

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CEntityIdentity.cs#L6)

```csharp
CEntityInstance EntityInstance { get; }
```

#### Property Value

- [CEntityInstance](/docs/api/schemadefinitions/centityinstance)

### Flags

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityIdentity.cs#L24)

```csharp
ref uint Flags { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Name

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityIdentity.cs#L20)

```csharp
string Name { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### NameStringableIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityIdentity.cs#L18)

```csharp
ref int NameStringableIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Next

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityIdentity.cs#L34)

```csharp
CEntityIdentity? Next { get; }
```

#### Property Value

- [CEntityIdentity](/docs/api/schemadefinitions/centityidentity)?

### NextByClass

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityIdentity.cs#L38)

```csharp
CEntityIdentity? NextByClass { get; }
```

#### Property Value

- [CEntityIdentity](/docs/api/schemadefinitions/centityidentity)?

### PathIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityIdentity.cs#L30)

```csharp
ref ChangeAccessorFieldPathIndex_t PathIndex { get; }
```

#### Property Value

- [ChangeAccessorFieldPathIndex_t](/docs/api/natives/changeaccessorfieldpathindex_t)

### Prev

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityIdentity.cs#L32)

```csharp
CEntityIdentity? Prev { get; }
```

#### Property Value

- [CEntityIdentity](/docs/api/schemadefinitions/centityidentity)?

### PrevByClass

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityIdentity.cs#L36)

```csharp
CEntityIdentity? PrevByClass { get; }
```

#### Property Value

- [CEntityIdentity](/docs/api/schemadefinitions/centityidentity)?

### WorldGroupId

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityIdentity.cs#L26)

```csharp
ref uint WorldGroupId { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

## Methods

### NameStringableIndexUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityIdentity.cs#L40)

```csharp
void NameStringableIndexUpdated()
```

