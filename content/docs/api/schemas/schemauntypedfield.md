---
title: SchemaUntypedField
---

# Class SchemaUntypedField

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Schemas/SchemaUntypedField.cs#L5)

**Namespace**: [SwiftlyS2.Shared.Schemas](/docs/api/schemas)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public class SchemaUntypedField : ISchemaClass<SchemaUntypedField>, ISchemaField, ISchemaClass, INativeHandle
```

#### Inheritance

- [object](https://learn.microsoft.com/dotnet/api/system.object)
- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

#### Implements

- [ISchemaClass<SchemaUntypedField>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

#### Inherited Members

- [object.Equals(object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object))
- [object.Equals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object))
- [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)
- [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)
- [object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)
- [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals)
- [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### SchemaUntypedField(nint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Schemas/SchemaUntypedField.cs#L14)

```csharp
public SchemaUntypedField(nint handle)
```

#### Parameters

- **handle**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

## Properties

### Address

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Schemas/SchemaUntypedField.cs#L24)

Dangerous method to get the memory address of the object

```csharp
public nint Address { get; }
```

#### Property Value

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

### IsValid

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Schemas/SchemaUntypedField.cs#L10)

Return whether a handle is valid. 
Still might be dangerous for some pointer that borrowed from game instead of allocated by ourselves.

```csharp
public bool IsValid { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### From(nint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Schemas/SchemaUntypedField.cs#L19)

```csharp
public static SchemaUntypedField From(nint handle)
```

#### Parameters

- **handle**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

#### Returns

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

