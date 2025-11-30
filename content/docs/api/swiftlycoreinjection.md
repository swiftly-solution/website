---
title: SwiftlyCoreInjection
---

# Class SwiftlyCoreInjection

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/SwiftlyCoreInjection.cs#L7)

**Namespace**: [SwiftlyS2.Shared](/docs/api)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public static class SwiftlyCoreInjection
```

#### Inheritance

- [object](https://learn.microsoft.com/dotnet/api/system.object)
- [SwiftlyCoreInjection](/docs/api/swiftlycoreinjection)

#### Inherited Members

- [object.Equals(object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object))
- [object.Equals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object))
- [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)
- [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)
- [object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)
- [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals)
- [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### AddSwiftly(IServiceCollection, ISwiftlyCore, bool, bool)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/SwiftlyCoreInjection.cs#L9)

```csharp
public static IServiceCollection AddSwiftly(this IServiceCollection self, ISwiftlyCore core, bool addLogger = true, bool addConfiguration = true)
```

#### Parameters

- **self**: [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)
- **core**: [ISwiftlyCore](/docs/api/iswiftlycore)
- **addLogger**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)
- **addConfiguration**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

- [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

