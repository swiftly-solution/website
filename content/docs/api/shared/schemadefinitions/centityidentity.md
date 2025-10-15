---
title: CEntityIdentity
---

```csharp
public interface CEntityIdentity : ISchemaClass<CEntityIdentity>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### DataObjectTypes

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityIdentity.cs#L27)

```csharp
ref uint DataObjectTypes { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### DesignerName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityIdentity.cs#L21)

```csharp
string DesignerName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### EntityHandle

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CEntityIdentity.cs#L8)

```csharp
CHandle<CEntityInstance> EntityHandle { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CEntityInstance](/docs/api/shared/schemadefinitions/centityinstance)>

### EntityInstance

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CEntityIdentity.cs#L6)

```csharp
CEntityInstance EntityInstance { get; }
```

#### Property Value

- [CEntityInstance](/docs/api/shared/schemadefinitions/centityinstance)

### Flags

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityIdentity.cs#L23)

```csharp
ref uint Flags { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Name

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityIdentity.cs#L19)

```csharp
string Name { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### NameStringableIndex

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityIdentity.cs#L17)

```csharp
ref int NameStringableIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Next

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityIdentity.cs#L33)

```csharp
CEntityIdentity? Next { get; }
```

#### Property Value

- [CEntityIdentity](/docs/api/shared/schemadefinitions/centityidentity)?

### NextByClass

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityIdentity.cs#L37)

```csharp
CEntityIdentity? NextByClass { get; }
```

#### Property Value

- [CEntityIdentity](/docs/api/shared/schemadefinitions/centityidentity)?

### PathIndex

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityIdentity.cs#L29)

```csharp
ref ChangeAccessorFieldPathIndex_t PathIndex { get; }
```

#### Property Value

- [ChangeAccessorFieldPathIndex_t](/docs/api/shared/natives/changeaccessorfieldpathindex_t)

### Prev

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityIdentity.cs#L31)

```csharp
CEntityIdentity? Prev { get; }
```

#### Property Value

- [CEntityIdentity](/docs/api/shared/schemadefinitions/centityidentity)?

### PrevByClass

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityIdentity.cs#L35)

```csharp
CEntityIdentity? PrevByClass { get; }
```

#### Property Value

- [CEntityIdentity](/docs/api/shared/schemadefinitions/centityidentity)?

### WorldGroupId

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityIdentity.cs#L25)

```csharp
ref uint WorldGroupId { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

## Methods

### NameStringableIndexUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityIdentity.cs#L39)

```csharp
void NameStringableIndexUpdated()
```

